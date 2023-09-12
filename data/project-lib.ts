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
    description: string
    startDate: Date,
    endDate: Date
}

export const projects: Project[] = [
    {
        name: "Docenate",
        photo_url: "project_thumbnails/docenate.png",
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
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
        name: "Portfolio",
        photo_url: "project_thumbnails/dcsn.png",
        skills: [
            SkillTag.HTML,
            SkillTag.Sass,
            SkillTag.Typescript,
            SkillTag.ReactJS,
            SkillTag.PostgreSQL
        ],
        synopsis: "This website, my online resume.  ",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
        name: "Convocord",
        photo_url: "project_thumbnails/convocord.png",
        skills: [
            SkillTag.HTML,
            SkillTag.Tailwind,
            SkillTag.Typescript,
            SkillTag.ReactJS,
            SkillTag.OpenAI,
            SkillTag.NextJS,
        ],
        synopsis: "A speech-to-text translation app that breaks down conversational language barriers.",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
        name: "UTSCGuessr",
        photo_url: "project_thumbnails/utscguessr.png",
        skills: [
            SkillTag.HTML,
            SkillTag.CSS,
            SkillTag.Javascript,
            SkillTag.Python,
            SkillTag.Flask,
            SkillTag.Maps,
        ],
        synopsis: "A recreation of the popular game Geoguessr, designed specifically for my university campus.",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
        name: "OkayReads",
        photo_url: "project_thumbnails/okayreads.png",
        skills: [
            SkillTag.HTML,
            SkillTag.CSS,
            SkillTag.Javascript
        ],
        synopsis: "A Goodreads clone with basic features, built in raw HTML, CSS and JS as part of a university course project.",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
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
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
        name: "DCYIS",
        photo_url: "project_thumbnails/dcyis.png",
        skills: [
            SkillTag.HTML,
            SkillTag.CSS,
            SkillTag.Typescript,
            SkillTag.Angular,
            SkillTag.Firebase,
        ],
        synopsis: "A stock trading simulator website built for students to practice investment skills.",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    },
    {
        name: "DCSN",
        photo_url: "project_thumbnails/dcsn.png",
        skills: [
            SkillTag.HTML,
            SkillTag.CSS,
            SkillTag.Typescript,
            SkillTag.Angular,
            SkillTag.Firebase,
        ],
        synopsis: "A news website built for the highschool student news organization I co-founded, complete with a custom content-management system.",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        startDate: makeDate("2023-1"),
        endDate: makeDate("2023-2")
    }
];