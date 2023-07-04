export interface Skill {
    name: string,
    icon_url: string,
    proficiency: number
}

export interface SkillCategory {
    [skillName: string]: Skill
}

export interface SkillCollection {
    [skillCategory: string]: Skill[]
}

export const Skills: SkillCollection = {
    frontend: [
        {
            name: "HTML",
            icon_url: "html",
            proficiency: 4
        },
        {
            name: "CSS",
            icon_url: "css",
            proficiency: 4
        },
        {
            name: "Sass",
            icon_url: "sass",
            proficiency: 3
        },
        {
            name: "Javascript",
            icon_url: "javascript",
            proficiency: 4
        },
        {
            name: "Typescript",
            icon_url: "typescript",
            proficiency: 4
        },
    ],
    frameworks: [
        {
            name: "Angular",
            icon_url: "angular",
            proficiency: 4
        },
        {
            name: "Flask",
            icon_url: "flask",
            proficiency: 3
        },
        {
            name: "ReactJS",
            icon_url: "react",
            proficiency: 2
        },
        {
            name: "NextJS",
            icon_url: "nextjs",
            proficiency: 2
        },

    ],
    backend: [
        {
            name: "NodeJS",
            icon_url: "nodejs",
            proficiency: 4
        },
        {
            name: "ExpressJS",
            icon_url: "express",
            proficiency: 3
        },
        {
            name: "PostgreSQL",
            icon_url: "postgresql",
            proficiency: 3
        },
        {
            name: "SQLite",
            icon_url: "sqlite",
            proficiency: 3
        },
        {
            name: "Firebase",
            icon_url: "firebase",
            proficiency: 3
        },
        {
            name: "Pinecone",
            icon_url: "pinecone",
            proficiency: 3
        },
    ],
    cloud: [
        {
            name: "Google Cloud",
            icon_url: "google_cloud",
            proficiency: 3
        },
        {
            name: "Microsoft Azure",
            icon_url: "azure",
            proficiency: 2
        },
        {
            name: "AWS",
            icon_url: "aws",
            proficiency: 2
        },
    ],
    technologies: [
        {
            name: "Git",
            icon_url: "git",
            proficiency: 4
        },
        {
            name: "GitHub",
            icon_url: "github",
            proficiency: 4
        },
        {
            name: "Docker",
            icon_url: "bash",
            proficiency: 3
        },
        {
            name: "Bash",
            icon_url: "bash",
            proficiency: 3
        },
    ],
    systems: [
        {
            name: "C",
            icon_url: "c",
            proficiency: 3
        },
        {
            name: "C++",
            icon_url: "c++",
            proficiency: 1
        },
        {
            name: "Rust",
            icon_url: "rust",
            proficiency: 2
        },
    ],
    APIs: [
        {
            name: "OpenAI",
            icon_url: "openai",
            proficiency: 4
        },
        {
            name: "Google Maps",
            icon_url: "google_maps",
            proficiency: 2
        },
        {
            name: "IEX Cloud",
            icon_url: "",
            proficiency: 2
        },
    ]
}