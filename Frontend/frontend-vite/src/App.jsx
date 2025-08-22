import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/public/Landing';
import SignIn from './pages/public/SignIn.jsx';
import ChooseUser from './pages/public/ChooseUser.jsx';
import JobseekerSignUp from './pages/public/jobseeker/JobseekerSignUp.jsx';
import EmployerSignUp from './pages/public/employer/EmployerSignUp.jsx';
import JobseekerVerification from './pages/public/jobseeker/JobseekerVerification.jsx';
import JobseekerActivation from './pages/public/jobseeker/JobseekerActivation.jsx';
import JobseekerOnboardingSkills from './pages/public/jobseeker/JobseekerOnboardingSkills.jsx';
import JobseekerOnboardingEducation from './pages/public/jobseeker/JobseekerOnboardingEducation.jsx';
import JobseekerOnboardingExperience from './pages/public/jobseeker/JobseekerOnboardingExperience.jsx';
import JobseekerOnboardingAccessibility from './pages/public/jobseeker/JobseekerOnboardingAccessibility.jsx';
import JobseekerOnboardingPreferences from './pages/public/jobseeker/JobseekerOnboardingPreferences.jsx';
import JobseekerOnboardingCompletion from './pages/public/jobseeker/JobseekerOnboardingCompletion.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chooseuser" element={<ChooseUser />} />
        <Route path="/signup/jobseeker" element={<JobseekerSignUp />} />
        <Route path="/signup/employer" element={<EmployerSignUp />} />
        <Route path="/signup/jobseeker/verification" element={<JobseekerVerification />} />
        <Route path="/signup/jobseeker/activation" element={<JobseekerActivation />} />
        <Route path="/onboarding/jobseeker/skills" element={<JobseekerOnboardingSkills />} />
        <Route path="/onboarding/jobseeker/education" element={<JobseekerOnboardingEducation />} />
        <Route path="/onboarding/jobseeker/experience" element={<JobseekerOnboardingExperience />} />
        <Route path="/onboarding/jobseeker/accessibility" element={<JobseekerOnboardingAccessibility />} />
        <Route path="/onboarding/jobseeker/preferences" element={<JobseekerOnboardingPreferences />} />
        <Route path="/onboarding/jobseeker/completion" element={<JobseekerOnboardingCompletion />} />
      </Routes>
    </Router>
  );
}

export default App;
