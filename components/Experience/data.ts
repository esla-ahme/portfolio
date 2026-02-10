export const sectionNames = ["Work", "Education", "Extracurriculars"];

export  interface SectionData {
  
    title: string;
    company?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description: string[];
    urls?: string[];
}
export const sectionData: {
  [key:string]: SectionData[]
} = {
  Work: [
    {
      title: "Solutions Developer",
      company: "Zoho Corp",
      location: "Cairo, Egypt",
      startDate: "January 2024",
      endDate: "Present",
      description: [
        "Built high-performance custom widgets using React and Vanilla JavaScript to enhance Zoho platform capabilities.",
        "Designed scalable frontend solutions with advanced permission logic, dynamic forms, and real-time data visualization components.",
        "Developed robust integrations with REST APIs and webhooks to connect multiple applications.",
        "Created Python and Node.js scripts to automate migration of millions of records and 0.5 TB+ documentation.",
        "Integrated APIs for OCR, PDF processing, and data visualization to enhance user experience.",
        "Led client meetings to gather requirements, presented technical solutions, and conducted UAT sessions ensuring 100% user satisfaction.",
      ],
      urls: [],
    },
    {
      title: "React Developer",
      company: "Arabcoderz",
      location: "Cairo, Egypt",
      startDate: "June 2022",
      endDate: "December 2022",
      description: [
        "Developed 'Darispace', a real estate platform with dynamic property listings, user profiles, and Google Maps integration.",
        "Created 'medtech-app', a medical device brokerage and maintenance application.",
        "Implemented complex state management with Redux across authentication, property search, and favorites system.",
        "Enhanced a company dashboard with dark mode, bilingual (Arabic-English) support using i18next, and RTL/LTR layout adaptation.",
        "Adapted the dashboard to manage four web and mobile applications.",
        "Used Jest for component testing and Webpack for optimized build configuration.",
      ],
      urls: ["www.darispace.com"],
    },
    {
      title: "Vue Developer",
      company: "Saluslab",
      location: "Dubai, UAE (Remote)",
      startDate: "March 2022",
      endDate: "June 2022",
      description: [
        "Enhanced routing architecture and styling systems for large-scale enterprise dashboards using Vue Router and Vuex.",
        "Built and integrated a real-time ticket monitoring board with live updates.",
        "Created reusable Vue components with Vue Bootstrap, establishing design system consistency across the platform.",
        "Optimized frontend performance, reducing load times by 20% through code refactoring and lazy loading.",
      ],
    },
    {
      title: "Frontend Intern",
      company: "Robot Valley",
      location: "Cairo, Egypt",
      startDate: "July 2020",
      endDate: "October 2020",
      description: [
        "Contributed to the development of new features and enhancements for the inventory management system.",
        "Worked on form validation and completed sub-tasks related to inventory management.",
        "Utilized HTML, CSS, JavaScript, and jQuery.",
      ],
    },
  ],
  Education: [
    {
      title: "B.Sc in Computer Engineering",
      company: "Ain Shams University",
      location: "Cairo, Egypt",
      startDate: "September 2016",
      endDate: "July 2021",
      description: [
        "Graduated with a 'Very Good with Honors' degree.",
        "Graduation Project: Social Media Platform Clone (Twitter) — Excellent Grade.",
        "Participated in the ECPC 2018 Qualification, a competitive programming competition, and a robotics competition.",
        "In the robotics competition, designed a remotely controlled car and a robot arm, both equipped with innovative control mechanisms.",
      ],
    },
  ],
  Extracurriculars: [
    {
      title: "React Native Course ",
      company: "Orange Digital Center",
      location: "Cairo, Egypt",
      startDate: "February 2022", // febr
      endDate: "March 2022",
      description: [
        "Attended a 3-week course on React Native, built a route finder using Google Maps API.",
        "Developed a notes app with SQLite.",
        "Created a Grocery e-market app as the final project.",
      ],
    },
    {
      title: "Web Designer at Sefrwahed",
      company: "Student Activity",
      location: "Cairo, Egypt",
      startDate: "June 2018",
      endDate: "June 2019",
      description: [
        "Contributed to website development and enhancement.",
        "Enhanced the Hackathon registration system for improved user-friendliness, with optional number of user.",
      ],
    },
    {
      title: "Web Designer at APEC",
      company: "Student Activity",
      location: "Cairo, Egypt",
      startDate: "Jan 2017",
      endDate: "June 2018",
      description: [
        "Developed a profile system and PST test.",
        "Transformed the APEC website into a single-page app (SPA), achieving a 300% faster loading speed.",
        "Actively participated in the development of the APEC Blog.",
      ],
    },
  ],
};
