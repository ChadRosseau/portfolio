import { SkillTag } from "./skill-lib"

const makeDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(+year, Number(month) - 1, 1);
  return date;
}

export interface Experience {
  name: string,
  logo_url: string,
  role: string,
  skills: SkillTag[],
  points: string[][],
  startDate: Date,
  endDate: Date | null,
  link: string | null,
  location: string,
  type: 'Full-time' | 'Part-time'
  customLogoWidth?: string,
}

export interface ExperienceDB {
  [id: string]: Experience
}

export const experiences: ExperienceDB = {
  'dcsn': {
    name: "Discovery College Student News",
    logo_url: "/experience_logos/dcsn.png",
    role: "Chief Technology Officer",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Typescript,
      SkillTag.Angular,
      SkillTag.Firebase,
      SkillTag.Git,
    ],
    points: [
      ["Co-founded the Discovery College Student News as the CTO, conducting website design,", "development and maintenance resulting in a platform supporting a student body of ~1500 users"],
      ["Custom-built a staff portal including a specialized content-management system to support a team", "of over 40 students in content creation."],
      ["Liaised with school Information Technology department to host website on school domain,", "enabling consideration of privacy, security and national law to satisfy institutional guidelines"],
      ["Oversaw and trained multiple younger students in programming as successors to the ICT role", "enabling continuation of the organization after my graduation."],
      ["Utilized Github as a version control system enabling management of thousands of codebase changes", "with multiple other ICT programmers."],
    ],
    startDate: makeDate("2020-9"),
    endDate: makeDate("2022-5"),
    link: "https://dcsn.discovery.edu.hk",
    location: "Hong Kong",
    type: 'Part-time',
  },
  'dailyedit': {
    name: "The Daily Edit",
    logo_url: "/experience_logos/dailyedit.png",
    role: "Junior Software Developer",
    skills: [
      SkillTag.Angular,
      SkillTag.Typescript,
      SkillTag.Rust,
      SkillTag.Python,
      SkillTag.Firebase,
      SkillTag.GitHub,
    ],
    points: [
      ["Designed and built a mass language-annotation platform using Typescript and a SQL relational", "database, enabling users to generate thousands of pieces of data designed to train a news", "analysis AI model."],
      ["Built a data-visualization tool using Python and Pytorch which enabled non-programmers within", "the company to understand and interpret abstract ML model parameters, performance and", "output."],
      ["Developed a custom web-extension, extending existing multi-tiered company infrastructure", "in Rust to bring the mobile app overlay experience to the web."],
    ],
    startDate: makeDate("2022-6"),
    endDate: makeDate("2023-3"),
    link: null,
    location: "Hong Kong",
    type: 'Part-time',
  },
  'migoverse': {
    name: "Migoverse",
    logo_url: "/experience_logos/migoverse.png",
    role: "Chief Technology Officer",
    skills: [
      SkillTag.Angular,
      SkillTag.Typescript,
      SkillTag.Firebase,
      SkillTag.Python,
      SkillTag.AWS,
      SkillTag.OpenAI,
    ],
    points: [
      ["Designed and built a lecture video search platform using Angular, Typescript and the Firebase", "NoSQL database, enabling users to navigate course lecture videos with unprecedented eﬀiciency."],
      ["Worked with university professors to identify leading indicators of student understanding alongside", "optimal collection/processing procedures for that data, informing next steps for development."],
      ["Built an extensive metrics collection and display system using serverless computing, enabling", "professors to view student search metrics in real-time and identify gaps in understanding"],
      ["Composed a Python and bash script pipeline to mass-process lecture videos via the OpenAI", "embeddings and Pinecone vector database APIs, cutting company costs by over 90%."]
    ],
    startDate: makeDate("2022-9"),
    endDate: null,
    link: null,
    location: "Canada",
    type: 'Part-time',
  },
  'genaigenesis': {
    name: "GenAIGenesis",
    logo_url: "/experience_logos/genaigenesis.png",
    role: "Chair of Technology",
    skills: [
      SkillTag.NextJS,
      SkillTag.HTML,
      SkillTag.Tailwind,
      SkillTag.Typescript,
      SkillTag.Firebase,
      SkillTag.GCloud,
    ],
    points: [
      ["Designed and built a lecture video search platform using Angular, Typescript and the Firebase", "NoSQL database, enabling users to navigate course lecture videos with unprecedented efficiency."],
      ["Worked with university professors to identify leading indicators of student understanding alongside", "optimal collection/processing procedures for that data, informing next steps for development."],
      ["Built an extensive metrics collection and display system using serverless computing, enabling", "professors to view student search metrics in real-time and identify gaps in understanding"],
      ["Composed a Python and bash script pipeline to mass-process lecture videos via the OpenAI", "embeddings and Pinecone vector database APIs, cutting company costs by over 90%."]
    ],
    startDate: makeDate("2024-1"),
    endDate: makeDate("2024-4"),
    link: null,
    location: "Canada",
    type: 'Part-time',
    customLogoWidth: 'w-10',
  },
  'airimpact': {
    name: "AirImpact",
    logo_url: "/experience_logos/airimpact.svg",
    role: "Software Developer Intern",
    skills: [
      SkillTag.Python,
      SkillTag.Flask,
      SkillTag.PostgreSQL,
      SkillTag.Docker,
      SkillTag.AWS,
      SkillTag.OpenAI,
    ],
    points: [
      ["Took charge of the company Python service, redesigning infrastructure from the ground-up to", "improve readability, enforce modularity and promote maintainability using relevant design patterns,", "resulting in vastly improved code eﬀiciency, quality, and cost-effectiveness"],
      ["Architected and executed a company migration from the OpenAI API to utilizing open-source", "Large Language Models in AWS, vastly improving data privacy for company clients."],
      ["Overhauled existing company document processing capabilities to enable robust parsing of tables,", "images and graphs in client documents."],
      ["Took initiative through identification of flaws in product performance, and subsequently identifying", "researching and developing solutions to reduce or solve such flaws."],
    ],
    startDate: makeDate("2024-1"),
    // endDate: makeDate("2024-4"),
    endDate: null,
    link: null,
    location: "Canada",
    type: 'Full-time',
  }
}

export const experiencesList = Object.values(experiences);
