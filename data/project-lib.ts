import { SkillTag } from "./skill-lib";

const makeDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(+year, Number(month) - 1, 1);
  return date;
}

export interface Project {
  name: string,
  photo_url: string,
  skills: SkillTag[],
  synopsis: string,
  description: string[],
  startDate: Date,
  endDate: Date | null,
  link: string | null,
  github: string | null,
  contributors: number,
  users: number | "?",
}

export interface ProjectDB {
  [id: string]: Project
}

export const projects: ProjectDB = {
  "migoverse": {
    name: "Migoverse",
    photo_url: "/project_thumbnails/migoverse.png",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Typescript,
      SkillTag.Angular,
      SkillTag.Firebase,
      SkillTag.ExpressJS,
      SkillTag.Azure,
      SkillTag.Python,
      SkillTag.OpenAI,
      SkillTag.Pinecone
    ],
    synopsis: "My startup, a company that offers a suite of tools which reimagine the university learning experience.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2022-9"),
    endDate: null,
    link: "https://mind.migoverse.ca",
    github: null,
    contributors: 1,
    users: 400,
  },
  "portfolio": {
    name: "Portfolio",
    photo_url: "/project_thumbnails/portfolio.png",
    skills: [
      SkillTag.HTML,
      SkillTag.Sass,
      SkillTag.Typescript,
      SkillTag.ReactJS,
      SkillTag.PostgreSQL
    ],
    synopsis: "This website, my online resume.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2023-8"),
    endDate: null,
    link: "https://www.chad-rossouw.com",
    github: null,
    contributors: 1,
    users: "?",
  },
  "convocord": {
    name: "Convocord",
    photo_url: "/project_thumbnails/convocord.png",
    skills: [
      SkillTag.HTML,
      SkillTag.Tailwind,
      SkillTag.Typescript,
      SkillTag.ReactJS,
      SkillTag.OpenAI,
      SkillTag.NextJS,
    ],
    synopsis: "A speech-to-text translation app that breaks down conversational language barriers.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2023-7"),
    endDate: makeDate("2023-8"),
    link: "https://convocord.chad-rossouw.com",
    github: null,
    contributors: 1,
    users: "?",
  },
  "utscguessr": {
    name: "UTSCGuessr",
    photo_url: "/project_thumbnails/utscguessr.png",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Javascript,
      SkillTag.Python,
      SkillTag.Flask,
      SkillTag.Maps,
    ],
    synopsis: "A recreation of the popular game Geoguessr, designed specifically for my university campus.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2023-3"),
    endDate: makeDate("2023-4"),
    link: null,
    github: null,
    contributors: 3,
    users: "?",
  },
  "okayreads": {
    name: "OkayReads",
    photo_url: "/project_thumbnails/okayreads.png",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Javascript
    ],
    synopsis: "A Goodreads clone with basic features, built in raw HTML, CSS and JS as part of a university course project.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2023-2"),
    endDate: makeDate("2023-3"),
    link: null,
    github: null,
    contributors: 2,
    users: "?",
  },
  "catastrophising": {
    name: "I'm Catastrophising",
    photo_url: "project_thumbnails/catastrophising.png",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Typescript,
      SkillTag.Angular,
      SkillTag.Firebase,
    ],
    synopsis: "A mental health support app designed to bolster confidence and reduce anxiety.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2023-10"),
    endDate: makeDate("2023-11"),
    link: null,
    github: null,
    contributors: 1,
    users: 1,
  },
  "dcyis": {
    name: "DCYIS",
    photo_url: "/project_thumbnails/dcyis.png",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Typescript,
      SkillTag.Angular,
      SkillTag.Firebase,
    ],
    synopsis: "A stock trading simulator website built for students to practice investment skills.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2020-8"),
    endDate: makeDate("2021-1"),
    link: "https://dcyis-production.web.app",
    github: null,
    contributors: 1,
    users: "?",
  },
  "dcsn": {
    name: "DCSN",
    photo_url: "/project_thumbnails/dcsn.png",
    skills: [
      SkillTag.HTML,
      SkillTag.CSS,
      SkillTag.Typescript,
      SkillTag.Angular,
      SkillTag.Firebase,
    ],
    synopsis: "A news website built for the highschool student news organization I co-founded, complete with a custom content-management system.",
    description: ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"],
    startDate: makeDate("2020-11"),
    endDate: makeDate("2022-5"),
    link: "https://dcsn.discovery.edu.hk",
    github: null,
    contributors: 2,
    users: 1200,
  }
};
