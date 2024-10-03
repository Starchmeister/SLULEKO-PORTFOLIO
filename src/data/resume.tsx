import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sluleko",
  initials: "SB",
  url: "https://sluleko.com",
  location: "Sandton,Gauteng",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "UI/UX Product Designer, Frontend Engineer, and also an Entrepreneur, passionate about building impactful products and helping people. With a strong focus on creating seamless digital experiences, I develop innovative solutions and actively build projects on the side.",
  summary:
    "I'm currently a Front-End Engineer at Terra Firma Solutions, where I specialize in creating and maintaining design systems for energy solutions products. My role involves translating design files into consistent, reusable components while ensuring the seamless integration of UI/UX principles throughout our codebase. I focus on both design and development, bridging the gap between design and engineering to deliver high-quality user experiences.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "svelte.js",
    "figma",
    "figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "me@sluleko.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Starchmeister",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/s-luleko-biyela-186068243/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@sluleko.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Terra Fimra",
      href: "https://www.terrafirma.africa/",
      badges: [],
      location: "Remote",
      title: "Product Designer and Engineer",
      logoUrl: "/terrafirma.svg",
      start: "Nov 2022",
      end: "Present",
      description:
        "Led the design and development of UI components, screens, and flows for clients, resulting in a 100% retention rate. Conducted user interviews and testing activities to gather insights and inform design decisions. Managed the creation of a design system from scratch and documented it comprehensively to ensure consistency across the application. Spearheaded the design of a data analysis tool for solar energy and utility management, adopted by over 1000 clients across 3000+ locations in Southern Africa. Additionally, designed an enterprise application for internal users, increasing productivity by 50%.In this role, I developed strong expertise in Next.js and React, along with advanced proficiency in SQL. I also worked extensively with charting libraries such as Nivo and Recharts, enabling me to create dynamic and data-driven visualizations for enhanced user experiences.",
    },
    {
      company: "Euromonitor International",
      badges: [],
      href: "https://shopify.com",
      location: "Cape Town, South Africa",
      title: "UX Engineer",
      logoUrl: "/euromonitor.svg",
      start: "September 2022",
      end: "September 2023",
      description:
        "Led the design and development of an improved checkout process for an e-commerce site, resulting in an 18% increase in completed checkouts and an 8% reduction in abandoned carts. Maintained and optimized components within the Angular project to enhance new feature turnaround times. Developed a new design system to improve accessibility across three internal SaaS projects. Collaborated with agencies to conduct A/B testing, creating 1:1 mocks to analyze user interactions and optimize the user experience. Validated design decisions through data research to ensure alignment with client brand and usability metrics. During this role, I gained proficiency in Angular and Material UI while also contributing to a C++ project, further strengthening my technical expertise and adaptability in diverse development environments.",
    },
    {
      company: "Wehost Africa(now Pynovi)",
      href: "https://dash.wehost.africa/",
      badges: [],
      location: "Cape Town, South Africa",
      title: "UI/UX Developer, Product Designer",
      logoUrl: "/wehost.svg",
      start: "November 2019",
      end: "October 2022",
      description:
        "Guided the design process of an internal cloud infrastructure project in collaboration with a European partner, playing a key role in re-engineering the hypervisor and FreeBSD OS to enable next-generation virtualization. Monitored and optimized uptime, hosting, and database performance to ensure optimal system capacity. Developed modern and scalable design systems for use across internal projects. Collaborated with a cross-functional team on the design of Legend Pay, delivering wireframes, mockups, user journeys, and cross-platform interactive prototypes to enhance the experience for merchants and customers.In this role, I honed my skills in WordPress development, JavaScript, and animation. I created interactive and engaging web experiences by leveraging JavaScript to build custom functionalities and integrated animations to elevate the visual appeal and usability of websites.",
    },
    {
      company: "Freelance",
      href: "https://splunk.com",
      badges: [],
      location: "Cape Town, South Africa",
      title: "Web Developer",
      logoUrl: "/freelance.svg",
      start: "February 2019",
      end: "October 2019",
      description:
        "Led freelance projects focused on designing and building websites, as well as creating wireframes for web and mobile applications. Implemented and managed web-based applications, databases, and interfaces, overseeing the entire development lifecycle from concept to testing and deployment. Developed graphic content for various purposes, including site re-skins, page layouts, email designs, and UI designs for web-based management systems.",
    },
  ],
  education: [
    {
      school: "University of Cape Town",
      href: "https://uct.ac.za",
      degree: "Bcom Accounting",
      logoUrl: "/UCT.svg",
      start: "2017",
      end: "2022",
    },

    {
      school: "Coursera: Google UX Professional Certification",
      href: "https://www.coursera.org",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/google.svg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Coursera: Google UX Foundations Certification",
      href: "https://www.coursera.org",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/google.svg",
      start: "2023",
      end: "2023",
    },
    {
      school: "Simplelearn",
      href: "https://www.simplilearn.com/",
      degree: "Agile Scrum Foundation",
      logoUrl: "/simplelearn.svg",
      start: "2021",
      end: "2021",
    },
    {
      school: "Free Code Camp",
      href: "https://www.freecodecamp.org/",
      degree: "HTML,CSS and Javascript",
      logoUrl: "/fcc.svg",
      start: "2018",
      end: "2018",
    },
    {
      school: "Udacity",
      href: "https://www.udacity.com/",
      degree: "Nano Degree in Product Design",
      logoUrl: "/udacity.svg",
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "OnxUI",
      href: "https://onxui.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Onx UI is a design and development tool that provides a growing collection of ready-to-use Figma and Webflow components to help users build sleek, modern websites quickly. It is designed to streamline the process of creating responsive layouts, accelerating development workflows, and offering scalability from prototypes to enterprise solutions.",
      technologies: [
        "Svelte.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://onxui.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/onxui.svg",
    },
    {
      title: "Global Crops Sales Website",
      href: "https://globalcropsales.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Global Crop Sales is an international trading company specializing in premium peanuts, macadamia nuts, and beans. With a strong commitment to quality and service, the company has established itself as a trusted supplier to clients around the world.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "React Email",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://globalcropsales.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/GCS.svg",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
