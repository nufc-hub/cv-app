// Contact details
export const createContact = () => ({
  name: 'Bob Smith ',
  email: 'bob@gmail.com',
  phone: '+1 (212) 555-1234',
  city: 'New York',
  country: 'USA',
  id: crypto.randomUUID(),
});

// Profile summary
export const createProfileInfo = () => ({
  summary: `Passionate and adaptable educator with over eight years of experience in classroom teaching and curriculum development. Currently expanding technical skills in web development.`,
});

export const createWorkExperienceInfo = () => ({
  date: '2020 - 2023',
  company: 'New York Public Schools',
  jobTitle: 'Elementary School Teacher',
  description:
    'Designed and delivered daily lesson plans in core subjects for grades 3–6. Created a positive and inclusive classroom environment, assessed student progress, and collaborated with parents and staff to support individual learning needs.',
  id: crypto.randomUUID(),
});

// Education details
export const createEducationInfo = () => ({
  date: '2023 - 2024',
  universityName: 'University of Oxford',
  degree: 'MSc Computer Science',
  location: 'Oxford, United Kingdom',
  id: crypto.randomUUID(),
});

export const createProjectsInfo = () => ({
  period: 'MARCH 2023 - MAY 2024',
  projectName: 'Smart Learning Toolkit',
  role: 'Project Lead',
  placeOrPlatform: 'Freelancer',
  description:
    'Developed a suite of web-based tools to support personalized learning in primary education. Used JavaScript and Python to build interactive modules and analytics dashboards for student performance tracking.',
  id: crypto.randomUUID(),
});

export const createSkillsInfo = () => ({
  skillCategory: 'Technical Skills',
  skillList: 'JavaScript, css, html, React',
  id: crypto.randomUUID(),
});
