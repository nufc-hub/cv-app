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
  date: '2020 - 2023',
  company: 'The Government',
  jobTitle: 'Firefighter',
  description: 'Put out fires and helped with local issues.',
  id: crypto.randomUUID(),
});

// Education details
export const createEducationInfo = () => ({
  date: '2023 - 2024',
  universityName: 'Oxford University',
  degree: 'Computer Science',
  city: 'Oxford',
  country: 'United Kingdom',
  id: crypto.randomUUID(),
});

export const createProjectsInfo = () => ({
  period: 'MARCH 2023 - MAY 2024',
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
