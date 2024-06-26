import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    flutter,
    telesun,
    // mongodb,
    git,
    figma,
    cpp,
    mysql,
    java,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    dink,
    python,
    // shopify,
    carrent,
    figoBot,
    jobit,
    tripguide,
    threejs,
    figo,
    // python,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Graphics Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    // {
    //     name: "React JS",
    //     icon: reactjs,
    // },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Flutter",
    //     icon: flutter,
    // },
    // {
    //     name: "Cpp",
    //     icon: cpp,
    // },
    {
        name: "Java",
        icon: java
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Python",
        icon: python,
    },
    // {
    //     name: 'Telesun',
    //     icon: telesun,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    // {
    //     name: "git",
    //     icon: git,
    // },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Graphics Designer",
        company_name: "Dink Tv, Kestedemena",
        icon: dink,
        iconBg: "#000000",
        date: "October 2023 - Decemmber 2023",
        points: [
            "Brand Identity, Branding and theme determining since it was at startup stage when I was working.",
            "Collaborating with Architectural graduate graphic designers to design new themes for every show in Dink Tv.",
            "Contributing to Dink Tv instagram filter as a graphic designer.",
            "Event cards and 'step and repeat' banners.",
            "Casting in one of the Shows",
        ],
    },
    {
        title: "TeleSun.js Developper",
        company_name: "Chef-Figo Cakes",
        icon: figo,
        iconBg: "#ffffff",
        date: "February 2024 - April 2024",
        points: [
            "Developing and maintaining Telegram Bots for the business.",
            "Mobilizing google apps to provide my clients with free Servers to produce high quality telegram bots.",
            "Reviewing previous versions for performance and reliability improvments.",
            "Build multiple bots for different client requirements.",
        ],
    },//add more here in the future
];

const testimonials = [
    {
        testimonial:
            "Fenan is one of the most passionate software developers I know. He consistently completes projects with high quality and has also been a kind and helpful friend on various projects.",
        name: "Abdi Urgessa",
        designation: "Owner",
        company: "Telesun",
        image: "https://avatars.githubusercontent.com/u/71874927?v=4",
    },

    {
        testimonial:
            "Fenan Y. is the talented mind behind the creation of 'Chef Figo', a Telegram bot that revolutionized the cake ordering experience. Fenan's bot has garnered respect for its simplicity and effectiveness.",
        name: "Abenezer Fikadu",
        designation: "CTO at Chef Figo",
        company: "Chef Figo Cakes",
        image: "https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/103483256_742363956572459_1406613359607579322_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-mLnQwgPyfwQ7kNvgEPYJ55&_nc_ht=scontent.fadd2-1.fna&oh=00_AYCAP-hrwZGySWX8nA0B_DHJLF08TA1cchHK1ujDrE0mLw&oe=666EE4BD",
    },
    {
        testimonial: "Fenan is a great and dedicated developer who have shown me his amazing abilities on creating beautiful and pretty functional websites plus bots.",
        name: "Naod Alemu",
        designation: "Top Rated Freelancer",
        company: "Upwork",
        image: "https://www.upwork.com/profile-portraits/c1dppFZjQqI7L_70wAK6JV9RFPHkh6Yd1rZwGI4JkMYL2_ItuAUu_QT19B_54N1Ujf",
    },
];

const projects = [

    {
        name: "Club  Event Management",
        description:
            "Web-based platform that allows users to View, book, and manage Events from various Other Users, providing a convenient and efficient solution for Event handling.",
        tags: [
            {
                name: "HTML, CSS, JS",
                color: "pink-text-gradient",
            },
            {
                name: "Mysql",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/pal-oe/club-management-CSEC",
    },
    {
        name: "Figo Bot",
        description:
            "Telegram Bot that enables users to easily place their order from telegram channels, it handles payments and organizes orders and notifications",
        tags: [
            {
                name: "telesun",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "telegram",
                color: "blue-text-gradient",
            },
        ],
        image: figoBot,
        source_code_link: "https://github.com/pal-oe/telegram-bot-using-telesun/tree/main/Cake%20Ordering%20Bot",
    },//add more projects here
];

export { services, technologies, experiences, testimonials, projects };
