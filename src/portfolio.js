/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lucas Lima",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Lucas Lima Portfolio",
    type: "website",
    url: "http://lucaslima.com/",
  },
};

//Home Page
const greeting = {
  title: "Lucas Lima",
  logo_name: "LucasLima",
  // nickname: "luucasfer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1LgAY-SKtn3FRa25OSxthpTmhMLOdhP4X/view?usp=sharing",
  portfolio_repository: "https://github.com/luucasfer",
  githubProfile: "https://github.com/luucasfer",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/luucasfer",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/luucasfer/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ferreiralucas.eng@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Backend Development and automations",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building REST APIs",
        "⚡ Creating applications in Python and JavaScript",
        "⚡ SQL and NoSQL databases",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "skill-icons:flask-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "mySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "influxDB",
          fontAwesomeClassname: "devicon:influxdb-wordmark",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Event-Driven Architectures",
      fileName: "DataScienceImg.js",
      skills: [
        "⚡ Experience working with brokers",
        "⚡ Communication between microservice with topics and queues",
      ],
      softwareSkills: [
        {
          skillName: "Mosquitto",
          fontAwesomeClassname: "simple-icons:eclipsemosquitto",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "logos:rabbitmq-icon",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Azure Cloud",
        "⚡ Hosting and maintaining containers on virtual machine instances along with integration of databases",
        "⚡ Develop and Deploy kubernetes infrastructure",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "devicon:azuredevops",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/luucasfer",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PUC Minas",
      subtitle: "Post-graduation in software engineering",
      logo_path: "puc_minas_logo.png",
      alt_name: "PUC Minas",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Focused in learning topics like:",
        "- Agile teams",
        "- Requirements engineering",
        "- Backend, frontend and mobile architectures",
        "- UI / UX",
        "- APIs, Testing, DevOps and Metrics.",
      ],
      website_link: "https://www.pucminas.br/destaques/Paginas/default.aspx",
    },
    {
      title: "São Judas Tadeu University",
      subtitle: "B.Tech. in Automation and Control Engineering",
      logo_path: "usjt_logo.png",
      alt_name: "USJT",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ I have studied automation and control engineering subjects like physics, calculus and programming languages",
        "⚡ Apart from this, I have done courses on Python and networks infrastructures.",
      ],
      website_link: "https://www.usjt.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: ".Net Developer",
      subtitle: "- Digital Inovation One",
      logo_path: "dio_logo.png",
      certificate_link: "https://www.dio.me/certificate/MPX5LJKH/share",
      alt_name: "DIO",
      color_code: "#8C151599",
    },
    {
      title: ".Django REST APIs",
      subtitle: "- Alura",
      logo_path: "alura_logo.png",
      certificate_link:
        "https://cursos.alura.com.br/degree/certificate/7e61a00a-3f8f-4ef4-b37f-a508f38154dc",
      alt_name: "Alura",
      color_code: "#051d3b",
    },
    {
      title: ".Kubernetes: Deployments, Volumes and scalibility",
      subtitle: "- Alura",
      logo_path: "alura_logo.png",
      certificate_link:
        "https://cursos.alura.com.br/certificate/decbef79-b0bc-4082-abef-36e633f1c3e0",
      alt_name: "Alura",
      color_code: "#051d3b",
    },
    {
      title: ".MongoDB",
      subtitle: "- Datacamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/course/2fd824e3c6acd1d853c2217b75f302bcdc00c408",
      alt_name: "Datacamp",
      color_code: "#03EF62",
    },
    {
      title: ".REST APIs with flask",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-667dc728-043d-4bcf-8cba-8c99a33df9c5/",
      alt_name: "udemy",
      color_code: "#5624d0",
    },
    {
      title: ".Big Data Analytics com R e Microsoft Azure Machine Learning",
      subtitle: "- Data Science Academy",
      logo_path: "dsa_logo.png",
      certificate_link: "https://mycourse.app/oyoaRA5AK5L4v7QH6",
      alt_name: "dsacademy",
      color_code: "#01080E",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "BACKEND SOFTWARE ENGINEER",
  description:
    "I have been working developing infrastructures and systems to prove some concepts and creating new prodcuts for clients who desires to improve their performance and business",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Blueshift Brazil.",
          company_url: "https://blueshift.com.br/",
          logo_path: "blueshift_logo.png",
          duration: "Jan 2024 - Present",
          location: "São Paulo, SP, Brazil",
          description:
            "PagoNxt Santander: Developing microservices using DDD with nodeJS, mongoDB, Azure DevOps (Repos, Boards, Pipelines CI/CD), ServiceBus, RabbitMQ and unit tests with Jest. The project consists in a queue architecture for generating global reports for GetNet.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Blueshift Brazil.",
          company_url: "https://blueshift.com.br/",
          logo_path: "blueshift_logo.png",
          duration: "Jan 2023 - Jan 2024",
          location: "São Paulo, SP, Brazil",
          description:
            "Developed microservices and REST API. Integration with third-part APIs. Implemented MongoDB and Kubernetes pods for system optimization. Integration with frontend. IoT Solutions",
          color: "#000000",
        },
        {
          title: "Intership",
          company: "Blueshift Brazil.",
          company_url: "https://blueshift.com.br/",
          logo_path: "blueshift_logo.png",
          duration: "June 2022 - Jan 2023",
          location: "São Paulo, SP, Brazil",
          description:
            "Worked on the back-end, building a REST API for a Smart-Farm Web IoT application that controls and monitors a smart garden consisting of ESP32 devices with LoRa communication. I used the Flask framework in Python to create CRUD routes, along with the ORM (peewee) for data manipulation, JSON file handling, and connections to MySQL and InfluxDB. Additionally, I captured data from Azure IoT Hub, which served as the MQTT broker.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create microservices projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my_photo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  // blogSection: {
  //   title: "",
  //   subtitle:
  //     "",
  //   link: "",
  //   avatar_image_path: "",
  // },
  // addressSection: {
  //   title: "",
  //   subtitle: "",
  //   locality: "",
  //   country: "",
  //   region: "",
  //   postalCode: "",
  //   streetAddress: "",
  //   avatar_image_path: "",
  //   location_map_link: "",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
