// Contact details
export const createContact = () => ({
  name: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  gitHub: '',
  linkedIn: '',
  id: crypto.randomUUID(),
});

// Profile summary
export const createProfileInfo = () => ({
  summary: '',
});

// Education details
export const createEducationInfo = () => ({
  universityName: '',
  city: '',
  country: '',
  degree: '',
  startDate: '',
  endDate: '',
  id: crypto.randomUUID(),
});

export const createWorkExperienceInfo = () => ({
  jobTitle: '',
  company: '',
  startDate: '',
  endDate: '',
  description: '',
  id: crypto.randomUUID(),
});

export const createProjectsInfo = () => ({
  projectName: '',
  role: '',
  placeOrPlatform: '',
  period: '',
  id: crypto.randomUUID(),
});

export const createSkillsInfo = () => ({
  skillCategory: '',
  skillList: '',
  id: crypto.randomUUID(),
});
