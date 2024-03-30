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
            "CamboShoe is a dynamic web application  designed to cater to footwear enthusiasts",
        description: `
        CamboShoe is a dynamic web application crafted with VueJS, Vuex, NuxtJS, and Vuetify. Designed to cater to footwear enthusiasts, it offers a wide array of shoe options, complete with detailed descriptions for each product. Customers have the convenience of making purchases using their PayPal accounts. Beyond shopping, CamboShoe also features a blog section that delves into the latest fashion trends, providing users with a comprehensive platform for both shopping and fashion insights.
      
        This web application serves as the culmination of my final project, where I have taken on the roles of both frontend and backend developer.s
       
    `,
        imageUrl: "/projects/camboshoe/poster.png",
        demo: "",

        technologies: [
            Technologies.vuejs,
            Technologies.nuxtjs,
            Technologies.vuetify,
            Technologies.vuex,
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
            "  KIT Point Management System  is an internship reporting system",
        description: `
            KIT Point Management System  is an internship reporting system designed for students in KIT to log their hours, track their performance, and access internship information, while enabling administrators to monitor student activities during their internships.
          
            This application was created as an internal project during my internship, where I was engaged as a Frontend developer. I've developed several features for KPMS and am currently in
            the process of migrating the system to a new technology to
            enhance its functionality and performance.
            
           
        `,
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
        type: "reactjs",
        short_desc:
            "Shuttle Bus is designed to simplify transportation for students and staff",
        description: `
        Shuttle Bus is designed to simplify transportation for students and staff, offering a booking system for shuttle services between locations, alongside administrative tools for efficient transportation schedule management.

        This application was created as an internal project during my internship, where I was engaged as a Frontend developer. Together with my team, I was involved in the maintenance of the system, focusing on enhancing and migrating both the user and admin interfaces to be more user-friendly and efficient. In addition to these improvements, we were tasked with integrating new features to meet evolving requirements, showcasing our collective effort to refine and advance the system's capabilities.
           
        `,
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
            "Engineernest is designed to help engineers find good job opportunities and startups",
        description: `
        Engineernest is designed to help engineers find good job opportunities and startups hire skilled workers without overspending. This platform makes it easier for both groups to connect and meet their needs. 
    
              
        This application was created as a client project during my internship, where my role was primarily that of a Frontend developer. In addition to my development duties, I also contributed to the UX/UI aspect of the project, assisting my team in designing user-friendly and aesthetically pleasing interfaces.
      
            `,
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
