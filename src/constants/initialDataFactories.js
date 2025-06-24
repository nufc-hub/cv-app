// Contact details
export const createContact = () => ({
  name: 'Bob Smith ',
  email: 'bob@gmail.com',
  phone: '02234554934',
  city: 'New York',
  country: 'USA',
  gitHub: 'github',
  linkedIn: 'linkedIn',
  id: crypto.randomUUID(),
});

// Profile summary
export const createProfileInfo = () => ({
  summary: `At the end of the news, they often give you a summary of the main stories. In summary, they decided against the proposal. I only asked for a summary of the main points but she's making a real meal out of it.`,
});

export const createWorkExperienceInfo = () => ({
  company: 'The Government',
  jobTitle: 'Firefighter',
  startDate: '05/06/25',
  endDate: '-present',
  description: 'Put out fires and helped with local issues.',
  id: crypto.randomUUID(),
});

// Education details
export const createEducationInfo = () => ({
  universityName: 'Oxford University',
  degree: 'Computer Science',
  city: 'Oxford',
  country: 'United Kingdom',
  startDate: '04/09/22',
  endDate: '04/06/25',
  id: crypto.randomUUID(),
});

export const createProjectsInfo = () => ({
  projectName: 'Stop fire',
  role: 'Fire stopper',
  placeOrPlatform: 'Firestation',
  period: '05/06/25 - present',
  id: crypto.randomUUID(),
});

export const createSkillsInfo = () => ({
  skillCategory: 'Fire',
  skillList: 'Can put fires out.',
  id: crypto.randomUUID(),
});
