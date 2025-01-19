export enum SkillTag {
    HTML = 'html',
    CSS = 'css',
    Sass = 'sass',
    Tailwind = 'tailwind',
    Javascript = 'javascript',
    Typescript = 'typescript',
    Angular = 'angular',
    Flask = 'flask',
    ReactJS = 'react',
    NextJS = 'nextjs',
    NodeJS = 'nodejs',
    ExpressJS = 'express',
    PostgreSQL = 'postgresql',
    SQLite = 'sqlite',
    Firebase = 'firebase',
    Pinecone = 'pinecone',
    GCloud = 'google_cloud',
    Azure = 'azure',
    AWS = 'aws',
    Git = 'git',
    GitHub = 'github',
    Bash = 'bash',
    Docker = 'docker',
    Python = 'python',
    Rust = 'rust',
    C = 'c',
    Cpp = 'c++',
    OpenAI = 'openai',
    Maps = 'google_maps',
    IEX = 'iex',
    Flutter = 'flutter',
    ReactNative = 'react_native',
    Cloudflare = 'cloudflare',
}

export interface Skill {
    name: string;
    icon_url: string;
    proficiency: number;
}

export interface SkillCollection {
    [skillCategory: string]: Skill[];
}

export const Skills: SkillCollection = {
    Frontend: [
        {
            name: 'HTML',
            icon_url: 'html',
            proficiency: 4,
        },
        {
            name: 'CSS',
            icon_url: 'css',
            proficiency: 4,
        },
        {
            name: 'Sass',
            icon_url: 'sass',
            proficiency: 2,
        },
        {
            name: 'Tailwind CSS',
            icon_url: 'tailwind',
            proficiency: 4,
        },
        {
            name: 'Javascript',
            icon_url: 'javascript',
            proficiency: 4,
        },
        {
            name: 'Typescript',
            icon_url: 'typescript',
            proficiency: 4,
        },
    ],
    Frameworks: [
        {
            name: 'Angular',
            icon_url: 'angular',
            proficiency: 4,
        },
        {
            name: 'Flask',
            icon_url: 'flask',
            proficiency: 3,
        },
        {
            name: 'NextJS',
            icon_url: 'nextjs',
            proficiency: 3,
        },
        {
            name: 'ReactJS',
            icon_url: 'react',
            proficiency: 3,
        },
    ],
    Backend: [
        {
            name: 'NodeJS',
            icon_url: 'nodejs',
            proficiency: 4,
        },
        {
            name: 'ExpressJS',
            icon_url: 'express',
            proficiency: 4,
        },
    ],
    Database: [
        {
            name: 'PostgreSQL',
            icon_url: 'postgresql',
            proficiency: 3,
        },
        {
            name: 'SQLite',
            icon_url: 'sqlite',
            proficiency: 3,
        },
        {
            name: 'Firebase',
            icon_url: 'firebase',
            proficiency: 3,
        },
        {
            name: 'Pinecone',
            icon_url: 'pinecone',
            proficiency: 3,
        },
    ],
    Cloud: [
        {
            name: 'Google Cloud',
            icon_url: 'google_cloud',
            proficiency: 3,
        },
        {
            name: 'Microsoft Azure',
            icon_url: 'azure',
            proficiency: 2,
        },
        {
            name: 'AWS',
            icon_url: 'aws',
            proficiency: 2,
        },
        {
            name: 'Cloudflare',
            icon_url: 'cloudflare',
            proficiency: 2,
        },
    ],
    Technologies: [
        {
            name: 'Git',
            icon_url: 'git',
            proficiency: 4,
        },
        {
            name: 'GitHub',
            icon_url: 'github',
            proficiency: 4,
        },
        {
            name: 'Bash',
            icon_url: 'bash',
            proficiency: 3,
        },
        {
            name: 'Docker',
            icon_url: 'docker',
            proficiency: 3,
        },
    ],
    Languages: [
        {
            name: 'Python',
            icon_url: 'python',
            proficiency: 4,
        },
        {
            name: 'Rust',
            icon_url: 'rust',
            proficiency: 2,
        },
        {
            name: 'Dart',
            icon_url: 'dart',
            proficiency: 2,
        },
        {
            name: 'C',
            icon_url: 'c',
            proficiency: 2,
        },
        {
            name: 'C++',
            icon_url: 'c++',
            proficiency: 1,
        },
    ],
    APIs: [
        {
            name: 'OpenAI',
            icon_url: 'openai',
            proficiency: 4,
        },
        {
            name: 'Google Maps',
            icon_url: 'google_maps',
            proficiency: 2,
        },
        {
            name: 'IEX Cloud',
            icon_url: 'iex',
            proficiency: 2,
        },
    ],
    Mobile: [
        {
            name: 'Flutter',
            icon_url: 'flutter',
            proficiency: 2,
        },
        {
            name: 'React Native',
            icon_url: 'react_native',
            proficiency: 1,
        },
    ],
};

export const allSkillList: Skill[] = [];
Object.values(Skills).forEach((skillList) => {
    skillList.forEach((skill) => allSkillList.push(skill));
});
