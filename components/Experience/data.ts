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
      title: "React Developer",
      company: "Arabcoderz",
      location: "Cairo, Egypt",
      startDate: "June 2022",
      endDate: "December 2022",
      description: [
        "Developed a real estate platform 'Darispace' with estate listings, user profiles, and Google Maps integration.",
        "Created 'medtech-app' a medical device brokerage and maintenance application.",
        "Enhanced a company dashboard by implementing dark mode, bilingual (Arabic-English) support using i18next, and ensured scalability for future sections.",
        "Adapted the dashboard to manage four web and mobile apps.",
        "Utilized React, Redux, Tailwind CSS, Firebase, and Google Maps.",
      ],
      urls: ["www.darispace.com"],
    },
    {
      title: "Vue Developer",
      company: "Saluslab",
      location: "Dubai, Emirates",
      startDate: "March 2022",
      endDate: "June 2022",
      description: [
        "Improved routing and styling system while maintaining the dashboard.",
        "Participated in adding the ticket systems monitoring board to the system.",
        "Utilized Vue, Vuex, and Vue Bootstrap.",
      ],
    },
    {
      title: "Frontend Intern",
      company: "robot-valley",
      location: "Cairo, Egypt",
      startDate: "July 2020",
      endDate: "October 2020",
      description: [
        "Contributed to the development of new features and enhancements for the inventory management system.",
        "utilized HTML, CSS, Javascript, Jquery.",
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
        "Participated in the ECPC 2018 Qualification, a competitive programming competition, and a robotics competition.",
        "In the robotics competition, I designed a remotely controlled car and a robot arm, both equipped with innovative control mechanisms.",
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
