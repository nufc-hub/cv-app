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
  date: '05/06/25 - present',
  company: 'The Government',
  jobTitle: 'Firefighter',
  description: 'Put out fires and helped with local issues.',
  id: crypto.randomUUID(),
});

// Education details
export const createEducationInfo = () => ({
  date: '04/09/22 - 25/06/25',
  universityName: 'Oxford University',
  degree: 'Computer Science',
  city: 'Oxford',
  country: 'United Kingdom',
  id: crypto.randomUUID(),
});

export const createProjectsInfo = () => ({
  period: '05/06/25 - present',
  projectName: 'Stop fire',
  role: 'Fire stopper',
  placeOrPlatform: 'Firestation',
  id: crypto.randomUUID(),
});

export const createSkillsInfo = () => ({
  skillCategory: 'Fire',
  skillList: 'Can put fires out.',
  id: crypto.randomUUID(),
});
