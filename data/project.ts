import { Technologies } from "./icon";

export interface projectType {
    id: string;

    title: string;
    date: string;
    type: string;
    short_desc: string;
    description: string;
    technologies: {
        name: string;
        logo: string;
    }[];
    imageUrl: string;
    demo: string;
    screenshots: string[];
}

export const projects: projectType[] = [
    {
        id: "camboshoe",
        title: "CamboShoe",
        date: "July 08 ,2021",
        type: "vuejs",
        short_desc:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        description: `
      Kjeybook is a web application that I've built using NextJS, TailwindCSS and Typescript.
      This website is an application where the user can view a list of books of a specific library and make a request to borrow the book.
      It also has an admin page where the admin can manage the books and the users request.
      
      This web application is the result of my group for the bootcamp project. I am responsible for the leading the frontend team.
      I am very happy with the result as our application was voted to be Best Project by the bootcamp committee.
    `,
        imageUrl: "/projects/camboshoe/poster.png",
        demo: "",

        technologies: [
            Technologies.nextjs,
            Technologies.tailwindcss,
            Technologies.typescript,
        ],

        screenshots: [
            "/projects/camboshoe/pic1.jpg",
            "/projects/camboshoe/pic2.jpg",
            "/projects/camboshoe/pic3.jpg",
            "/projects/camboshoe/pic4.jpg",
            "/projects/camboshoe/pic5.jpg",
            "/projects/camboshoe/pic6.jpg",
            "/projects/camboshoe/pic7.jpg",
            "/projects/camboshoe/pic8.jpg",
            "/projects/camboshoe/pic9.jpg",
            "/projects/camboshoe/pic10.jpg",
            "/projects/camboshoe/pic11.jpg",
        ],
    },

    {
        id: "kpms",
        title: "KIT Point Management System V6",
        date: "July 08 ,2021",
        type: "vuejs",
        short_desc:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        description:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        imageUrl: "/projects/kpms/poster.jpg",
        demo: "",

        technologies: [
            Technologies.nuxtjs,
            Technologies.tailwindcss,
            Technologies.javascript,
            Technologies.vuex,

        ],

        screenshots: [
            "/projects/kpms/pic1.jpg",
            "/projects/kpms/pic2.jpg",
            "/projects/kpms/pic3.jpg",
            "/projects/kpms/pic4.jpg",
            "/projects/kpms/pic5.jpg",
            "/projects/kpms/pic6.jpg",
            "/projects/kpms/pic7.jpg",
            "/projects/kpms/pic8.jpg",
        ],
    },

    {
        id: `shuttlebus`,
        title: "Shuttle Bus",
        date: "July 08 ,2021",
        type: "vuejs",
        short_desc:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        description:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        imageUrl: "/projects/shuttlebus/poster.png",
        demo: "",

        technologies: [
            Technologies.nextjs,
            Technologies.tailwindcss,
            Technologies.typescript,
        ],

        screenshots: [
            "/projects/shuttlebus/pic1.jpg",
            "/projects/shuttlebus/pic2.jpg",
            "/projects/shuttlebus/pic3.jpg",
            "/projects/shuttlebus/pic4.jpg",
            "/projects/shuttlebus/pic5.jpg",
            "/projects/shuttlebus/pic6.jpg",
            "/projects/shuttlebus/pic7.jpg",
            "/projects/shuttlebus/pic8.jpg",
            "/projects/shuttlebus/pic9.jpg",
            "/projects/shuttlebus/pic10.jpg",
            "/projects/shuttlebus/pic11.jpg",

        ],
    },


    {
        id: `engineernest`,
        title: "Engineernest",
        date: "July 08 ,2021",
        type: "reactjs",
        short_desc:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        description:
            "I’ve contributed to many Web designs and used my experience to contribute with the projects.",
        imageUrl: "/projects/engineernest/poster.jpg",
        demo: "",

        technologies: [
            Technologies.nextjs,
            Technologies.tailwindcss,
            Technologies.javascript,
        ],

        screenshots: [
            "/projects/engineernest/pic1.jpg",
            "/projects/engineernest/pic2.jpg",
            "/projects/engineernest/pic3.jpg",
            "/projects/engineernest/pic4.jpg",
            "/projects/engineernest/pic5.jpg",
            "/projects/engineernest/pic6.jpg",
            "/projects/engineernest/pic7.jpg",
            "/projects/engineernest/pic8.jpg",
        ],
    },
];
