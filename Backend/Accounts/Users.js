const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { PrismaClient } = require('../src/generated/prisma');
const { withAccelerate } = require('@prisma/extension-accelerate');
const prisma = new PrismaClient().$extends(withAccelerate());

const tempUsers = new Map();

const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jersonsullano201@gmail.com',
    pass: 'mywe blbe kjba pudr'
  }
});

router.get('/users', async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

router.post('/users/register', async (req, res) => {
  const {
    email,
    password,
    phone,
    userType,
    first_name,
    last_name,
    middle_name,
    address,
    date_of_birth,
    gender,
    isVerified
  } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const existingEmail = await prisma.users.findUnique({
    where: { email }
  });
  
  if (existingEmail) {
    return res.status(400).json({ error: 'This email is already registered.' });
  }

  const existingPhoneNumber = await prisma.users.findUnique({
    where: { phone_number: phone }
  });

  if (existingPhoneNumber) {
    return res.status(400).json({ error: 'This phone number is already registered.' });
  }

  const code = generateCode();
  const userData = { 
    email,
    password,
    phone,
    userType,
    first_name,
    last_name,
    middle_name,
    address,
    date_of_birth,
    gender,
    isVerified,
    code,
   }

  tempUsers.set(email, userData);

  try {
    await transporter.sendMail({
      from: 'PWDe App',
      to: email,
      subject: 'Your PWDe Verification Code',
      html: `<p>Hello ${first_name} ${last_name},</p><p>Your verification code is <b>${code}</b>.</p>`
    });
    res.json({ message: 'Verification code sent to your email.' })
    console.log(`Verification code sent to ${email}: ${code}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send verification email.' });
  }
});

router.post('/users/register/documents', async (req, res) => {
  const { email } = req.body;

  const userData = tempUsers.get(email);

  if(!userData) {
    return res.status(404).json({ message: 'User not found or session expired.' });
  }

  if(userData.userType == 'PWD') {
    // Validate PWD specific documents
  } else if(userData.userType == 'Employer') {
    // Validate Employer specific documents
  }

  // Assuming documents are uploaded successfully
  res.json({ message: 'Documents uploaded successfully. Please proceed to verify your account.' });
});

router.post('/users/register/verify', async (req, res) => {
  const { email, code } = req.body;

  const userData = tempUsers.get(email);

  if(!userData) {
    return res.status(404).json({ message: 'User not found or session expired.' });
  }

  if (userData.code !== code) {
    return res.status(400).json({ message: 'Incorrect verification code.' });
  }

  const dateToday = new Date();
  const formattedDate = dateToday.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const user = await prisma.users.create({
      data: { 
        email: email, 
        password_hash: userData.password, 
        phone_number: userData.phone, 
        user_type: userData.userType,
        created_at: formattedDate,
        is_verified: userData.isVerified,
      }
  });

  if (userData.userType === 'PWD') {
    const pwd = await prisma.pwd_Profile.create({
      data: {
        user_id: user.user_id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        middle_name: userData.middle_name,
        address: userData.address,
        date_of_birth: new Date(userData.date_of_birth),
        gender: userData.gender,
        created_at: formattedDate,
      }
    })
    tempUsers.delete(email);
    res.status(201).json({ message: 'Account verified and registered successfully.', user, pwd });
  } else if (userData.userType === 'Employer') {
    const emp = await prisma.employer_Profile.create({
      data: {
        user_id: user.user_id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        middle_name: userData.middle_name,
        address: userData.address,
        date_of_birth: new Date(userData.date_of_birth),
        gender: userData.gender,
        company_website: userData.company_website,
        LinkedIn_profile: userData.LinkedIn_profile,
        Other_Social_Media: userData.other_social_media,
        contact_person_fullname: userData.contact_person_fullname,
        contact_person_job_title: userData.contact_person_job_title,
        contact_person_phone_number: userData.contact_person_phone,
        created_at: formattedDate,
      }
    })
    tempUsers.delete(email);
    res.status(201).json({ message: 'Account verified and registered successfully.', user, emp });
  }
});

module.exports = router;