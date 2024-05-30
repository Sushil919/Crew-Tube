import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWave,
} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "ContracT", "Intern"];

export const experience = [
  { title: "Under 1 Year", value: "0-1" },
  { title: "1 -2 Year", value: "1-2" },
  { title: "2 -6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6" },
];

export const popularSearch = [
  "Video Editor",
  "Script Writer",
  "Thumbnail Designer",
  "Content Strategist",
  "Voice Over Artist",
  "SEO Specialist",
  "Social Media Manager",
  "Animator",
  "Channel Manager",
  "Graphic Designer",
  "Cinematographer",

];

export const jobs = [
  {
    id: "1",
    company: {
      name: "TechTube Productions",
      location: "Los Angeles, California",
      email: "info@techtube.com",
      contact: "+1 (123) 456-7890",
      about:
        "TechTube Productions is a leading digital media company specializing in creating engaging and informative content for tech enthusiasts worldwide. Our team is dedicated to delivering high-quality videos that entertain and educate our audience about the latest trends in technology.",
      profileUrl: "https://fbcd.co/images/products/e72db3f2b2579e34f792ef90b15ad5da.jpg",
    },
    jobTitle: "Video Editor",
    location: "Los Angeles, California",
    jobType: "Full-Time",
    salary: "Competitive",
    detail: [
      {
        desc: "We are seeking a talented Video Editor to join our creative team. The ideal candidate will have a passion for storytelling and a keen eye for detail. You will be responsible for editing raw footage into polished videos that captivate our audience and reflect our brand's style and tone.",
        requirement:
          "1. Proficient in video editing software such as Adobe Premiere Pro or Final Cut Pro. \n2. Strong understanding of video production techniques and principles. \n3. Ability to work efficiently under tight deadlines. \n4. Excellent communication and collaboration skills.",
      },
    ],
    applicants: ["1", "2", "3"],
    vacancies: 5,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "ScriptCraft Studios",
      location: "New York City, New York",
      email: "info@scriptcraft.com",
      contact: "+1 (123) 456-7890",
      about:
        "ScriptCraft Studios is a boutique creative agency specializing in crafting compelling narratives for digital content. Our mission is to help content creators bring their stories to life through powerful scripts that resonate with audiences.",
      profileUrl: Google,
    },
    jobTitle: "Scriptwriter",
    location: "Remote",
    jobType: "Freelance",
    salary: "Per Project",
    detail: [
      {
        desc: "We are looking for experienced Scriptwriters to join our team on a freelance basis. As a Scriptwriter, you will be responsible for developing engaging scripts for a variety of digital content, including YouTube videos, short films, and commercials.",
        requirement:
          "1. Proven experience as a scriptwriter, with a portfolio of previous work. \n2. Strong storytelling skills and the ability to create compelling narratives. \n3. Excellent command of the English language and grammar. \n4. Ability to collaborate with directors, producers, and other team members.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 10,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "DesignSpark Creations",
      location: "San Francisco, California",
      email: "info@designspark.com",
      contact: "+1 (123) 456-7890",
      about:
        "DesignSpark Creations is a design agency dedicated to helping content creators elevate their visual branding. Our team of designers specializes in creating stunning graphics, animations, and logos that make an impact.",
      profileUrl: Linkedin,
    },
    jobTitle: "Graphic Designer",
    location: "San Francisco, California",
    jobType: "Full-Time",
    salary: "Competitive",
    detail: [
      {
        desc: "We are seeking a talented Graphic Designer to join our dynamic team. As a Graphic Designer, you will collaborate with content creators to develop visually engaging assets for their YouTube channels, including thumbnails, channel art, and end screens.",
        requirement:
          "1. Proficiency in graphic design software such as Adobe Photoshop, Illustrator, and After Effects. \n2. Strong portfolio showcasing your design skills and creativity. \n3. Ability to work collaboratively in a fast-paced environment. \n4. Understanding of YouTube design trends and best practices.",
      },
    ],
    applicants: ["1", "2", "3"],
    vacancies: 3,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "SocialSphere Solutions",
      location: "Chicago, Illinois",
      email: "info@socialsphere.com",
      contact: "+1 (123) 456-7890",
      about:
        "SocialSphere Solutions is a social media management agency specializing in helping content creators grow their online presence. Our team of experts leverages cutting-edge strategies to optimize engagement and drive results across social platforms.",
      profileUrl: "https://www.socialsphere.com",
    },
    jobTitle: "Social Media Manager",
    location: "Remote",
    jobType: "Full-Time",
    salary: "Competitive",
    detail: [
      {
        desc: "We are looking for a results-driven Social Media Manager to join our remote team. The ideal candidate will have a passion for social media and a track record of growing online communities. You will be responsible for managing and implementing social media strategies for our clients, including content creation, community management, and analytics.",
        requirement:
          "1. Proven experience managing social media accounts for brands or influencers. \n2. Deep understanding of social media platforms, algorithms, and trends. \n3. Strong written and verbal communication skills. \n4. Ability to analyze data and derive actionable insights.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 2,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "SoundWave Studios",
      location: "Nashville, Tennessee",
      email: "info@soundwave.com",
      contact: "+1 (123) 456-7890",
      about:
        "SoundWave Studios is a music production company dedicated to helping content creators enhance their videos with high-quality soundtracks. Our team of composers and producers create custom music tailored to fit the tone and style of each project.",
      profileUrl: "https://www.soundwave.com",
    },
    jobTitle: "Music Composer",
    location: "Nashville, Tennessee",
    jobType: "Freelance",
    salary: "Per Project",
    detail: [
      {
        desc: "We are seeking talented Music Composers to join our network of freelancers. As a Music Composer, you will collaborate with content creators to create original music tracks for their YouTube videos, ranging from background music to theme songs.",
        requirement:
          "1. Proficiency in music composition software such as Logic Pro, Ableton Live, or FL Studio. \n2. Strong musical background with experience composing in various genres. \n3. Ability to interpret creative briefs and deliver music that enhances visual storytelling. \n4. Excellent communication and collaboration skills.",
      },
    ],
    applicants: ["1", "2"],
    vacancies: 5,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "SEOBoost Consultants",
      location: "Austin, Texas",
      email: "info@seoboost.com",
      contact: "+1 (123) 456-7890",
      about:
        "SEOBoost Consultants is a digital marketing agency specializing in search engine optimization (SEO) for content creators. Our team of experts helps YouTube channels rank higher in search results and attract more organic traffic.",
      profileUrl: "https://www.seoboost.com",
    },
    jobTitle: "SEO Specialist",
    location: "Remote",
    jobType: "Part-Time",
    salary: "Hourly",
    detail: [
      {
        desc: "We are looking for an experienced SEO Specialist to join our remote team. The ideal candidate will have a deep understanding of SEO principles and best practices, with a focus on optimizing YouTube channels for increased visibility and engagement.",
        requirement:
          "1. Proven experience in SEO, with a track record of improving search rankings and driving organic traffic. \n2. Familiarity with YouTube's algorithm and ranking factors. \n3. Strong analytical skills and the ability to interpret data to inform SEO strategies. \n4. Excellent written and verbal communication skills.",
      },
    ],
    applicants: ["1", "2", "3"],
    vacancies: 3,
    createdAt: new Date(),
  },
  {
  id: "7",
  company: {
    name: "AnimationWorks Studios",
    location: "Los Angeles, California",
    email: "info@animationworks.com",
    contact: "+1 (123) 456-7890",
    about:
      "AnimationWorks Studios is a leading animation studio specializing in creating captivating visuals for digital content. Our team of animators and designers brings stories to life through stunning animation and motion graphics.",
    profileUrl: "https://www.animationworks.com",
  },
  jobTitle: "Animator",
  location: "Los Angeles, California",
  jobType: "Full-Time",
  salary: "Competitive",
  detail: [
    {
      desc: "We are seeking skilled Animators to join our creative team. As an Animator, you will collaborate with content creators to produce engaging animations and motion graphics for their YouTube videos, ranging from character animation to explainer videos.",
      requirement:
        "1. Proficiency in animation software such as Adobe After Effects, Maya, or Blender. \n2. Strong understanding of animation principles and techniques. \n3. Ability to work creatively within project constraints and deadlines. \n4. Portfolio showcasing your animation skills and creativity.",
    },
  ],
  applicants: ["1", "2", "3"],
  vacancies: 2,
  createdAt: new Date(),
  },
  {
  id: "8",
    company: {
    name: "Influencer Insights Agency",
      location: "Miami, Florida",
        email: "info@influencerinsights.com",
          contact: "+1 (123) 456-7890",
            about:
    "Influencer Insights Agency is a research firm dedicated to analyzing trends and strategies in the influencer marketing industry. Our team provides valuable insights and recommendations to help content creators maximize their impact and revenue.",
      profileUrl: "https://www.influencerinsights.com",
    },
  jobTitle: "Content Strategist",
    location: "Remote",
      jobType: "Full-Time",
        salary: "Competitive",
          detail: [
            {
              desc: "We are looking for a dynamic Content Strategist to join our remote team. The ideal candidate will have a passion for digital content and a deep understanding of audience engagement strategies. You will be responsible for developing content strategies for content creators on YouTube to optimize their reach and monetization.",
              requirement:
                "1. Proven experience in content strategy, with a focus on digital platforms such as YouTube. \n2. Strong analytical skills and the ability to interpret data to inform content decisions. \n3. Excellent understanding of audience behavior and engagement metrics. \n4. Ability to communicate complex ideas effectively and collaborate with cross-functional teams.",
            },
          ],
            applicants: ["1", "2", "3", "4"],
              vacancies: 1,
                createdAt: new Date(),
  },
  {
  id: "9",
    company: {
    name: "BrandBoost Marketing",
      location: "Chicago, Illinois",
        email: "info@brandboost.com",
          contact: "+1 (123) 456-7890",
            about:
    "BrandBoost Marketing is a digital marketing agency specializing in helping brands connect with their target audience through strategic campaigns. Our team of marketers develops tailored strategies to promote content creators and increase brand awareness.",
      profileUrl: "https://www.brandboost.com",
    },
  jobTitle: "Brand Ambassador",
    location: "Remote",
      jobType: "Part-Time",
        salary: "Commission-based",
          detail: [
            {
              desc: "We are seeking enthusiastic Brand Ambassadors to join our remote team. As a Brand Ambassador, you will represent our agency and promote content creators on YouTube through various channels, including social media, events, and partnerships.",
              requirement:
                "1. Passion for digital content and influencer marketing. \n2. Strong communication and interpersonal skills. \n3. Ability to build and maintain relationships with influencers and brands. \n4. Proactive attitude and willingness to take initiative.",
            },
          ],
            applicants: ["1", "2"],
              vacancies: 3,
                createdAt: new Date(),
  },
];


export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Akshay Saini",
    location: "Bangalore",
    email: "contact@akshaysaini.com",
    contact: "contact@akshaysaini",
    about:
      "Akshay Saini is a software engineer and YouTuber who shares in-depth programming tutorials and tech insights, helping developers enhance their skills and knowledge.",
    profileUrl: "https://media-exp1.licdn.com/dms/image/C4D22AQHNe_mW8MOM2g/feedshare-shrink_2048_1536/0/1656776980535?e=2147483647&v=beta&t=b6QnpTnpi6bRy1h-ufFF2jBL2iWhbi9ESXZ0C_F2qpc",
    jobPosts: ["35", "36"],
  },
  {
    _id: 2,
    name: "Anshika Gupta",
    location: "Pune",
    email: "contact@anshikagupta.com",
    contact: "contact@anshikagupta",
    about:
      "Anshika Gupta is a software developer and YouTuber who provides programming tutorials, tech tips, and career guidance for developers and tech enthusiasts.",
    profileUrl: "https://yt3.googleusercontent.com/ytc/AL5GRJVPRZg3lzrI5DOnL00NJWocIJ4wZrrvGbgbDqHzVf0=s900-c-k-c0x00ffffff-no-rj",
    jobPosts: ["43", "44"],
  },
  {
    _id: 3,
    name: "Hitesh Choudhary",
    location: "Delhi",
    email: "contact@hiteshchoudhary.com",
    contact: "contact@hiteshchoudhary",
    about:
      "Hitesh Choudhary is a tech educator and YouTuber, known for his engaging tutorials on web development, programming, and other tech-related topics.",
    profileUrl: "https://i.ytimg.com/vi/DwLTeAlG2qQ/maxresdefault.jpg",
    jobPosts: ["37", "38"],
  },
  {
    _id: 4,
    name: "Tanay Pratap",
    location: "Bangalore",
    email: "contact@tanaypratap.com",
    contact: "contact@tanaypratap",
    about:
      "Tanay Pratap is a software engineer and YouTuber who offers career advice, coding tutorials, and insights into the tech industry to help aspiring developers succeed.",
    profileUrl: "https://th.bing.com/th/id/OIP.MXbkgUBnW5oOS2OYtPyBgQAAAA?rs=1&pid=ImgDetMain",
    jobPosts: ["39", "40"],
  },
  {
    _id: 5,
    name: "Ishan Sharma",
    location: "Delhi",
    email: "contact@ishansharma.com",
    contact: "contact@ishansharma",
    about:
      "Ishan Sharma is a YouTuber and educator who provides insights on career development, productivity, and personal growth, aimed at helping young professionals achieve their goals.",
    profileUrl: "https://th.bing.com/th/id/OIP.RDkk_JCR93re5af-bxYcGwHaHa?rs=1&pid=ImgDetMain",
    jobPosts: ["45", "46"],
  },
  {
    _id: 6,
    name: "Harkirat Singh",
    location: "Chandigarh",
    email: "contact@harkiratsingh.com",
    contact: "contact@harkiratsingh",
    about:
      "Harkirat Singh is a tech enthusiast and YouTuber who shares tutorials on various programming languages, software development tools, and tech trends.",
    profileUrl: "https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s900-c-k-c0x00ffffff-no-rj",
    jobPosts: ["41", "42"],
  },
  {
    _id: 7,
    name: "Physics Wallah",
    location: "Kolkata",
    email: "support@physicswallah.com",
    contact: "support@physicswallah",
    about:
      "Physics Wallah is an ed-tech YouTube channel by Alakh Pandey, providing comprehensive physics and chemistry lessons for students preparing for competitive exams like JEE and NEET.",
    profileUrl: "https://1.bp.blogspot.com/-8tC77jRJ8T4/YGXP9Bw3ksI/AAAAAAAAEJA/EQiOSZIXI0kFZ04zIvBSOiuhT_VdfzitgCLcBGAsYHQ/s900/unnamed.jpg",
    jobPosts: ["3", "4"],
  },
  {
    _id: 8,
    name: "Technical Guruji",
    location: "Dubai",
    email: "contact@technicalguruji.com",
    contact: "contact@technicalguruji",
    about:
      "Technical Guruji is a popular tech YouTube channel by Gaurav Chaudhary, offering reviews and insights on the latest gadgets and technology trends.",
    profileUrl: "https://yt3.ggpht.com/-_ugo2kisZDQ/AAAAAAAAAAI/AAAAAAAAAAA/B1h15AngyW8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    jobPosts: ["5", "6"],
  },
  {
    _id: 9,
    name: "Sandeep Maheshwari",
    location: "Delhi",
    email: "contact@sandeepmaheshwari.com",
    contact: "contact@sandeepmaheshwari",
    about:
      "Sandeep Maheshwari is a motivational speaker and entrepreneur, inspiring millions through his YouTube channel with life-changing seminars and motivational talks.",
    profileUrl: "https://th.bing.com/th/id/OIP.2zPQRUM9X7kNC_4r6IF4lgHaHa?rs=1&pid=ImgDetMain",
    jobPosts: ["7", "8"],
  },
  {
    _id: 10,
    name: "Kabita's Kitchen",
    location: "Noida",
    email: "contact@kabitaskitchen.com",
    contact: "contact@kabitaskitchen",
    about:
      "Kabita's Kitchen is a renowned YouTube channel dedicated to fantabulous cooking. Kabitaa shares delicious and easy-to-make recipes, making cooking enjoyable for everyone.",
    profileUrl: "https://cdn.shopify.com/s/files/1/0564/8505/2483/files/Logo-png.png?height=628&pad_color=fff&v=1661424278&width=1200",
    jobPosts: ["9", "10"],
  },
  {
    _id: 11,
    name: "The Viral Fever (TVF)",
    location: "Mumbai",
    email: "support@theviralfever.com",
    contact: "support@theviralfever",
    about:
      "The Viral Fever (TVF) is a leading digital entertainment channel known for its web series and comedic sketches that reflect social and cultural trends in India.",
    profileUrl: "https://i.pinimg.com/originals/eb/41/3b/eb413b043d31df8d224479e4cfbf06e1.jpg",
    jobPosts: ["11", "12"],
  },
  {
    _id: 12,
    name: "Artist Shubham Dogra",
    location: "Delhi",
    email: "contact@shubhamdogra.com",
    contact: "contact@shubhamdogra",
    about:
      "Shubham Dogra is an artist and YouTuber who creates beautiful and inspiring artwork. His channel showcases his artistic process, tutorials, and creative projects.",
    profileUrl: "https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/artistshubhamdogra_1631513039775_original._CR0,0,1693,1693_._FMjpg_.jpeg",
    jobPosts: ["13", "14"],
  },
  {
    _id: 13,
    name: "Cooking Shooking",
    location: "Hyderabad",
    email: "support@cookingshooking.com",
    contact: "support@cookingshooking",
    about:
      "Cooking Shooking is a popular YouTube channel by Yaman Agarwal, offering a wide variety of delicious recipes and cooking tips, making home cooking fun and easy.",
    profileUrl: "https://i.ytimg.com/vi/3IvWP4wzSUU/maxresdefault.jpg",
    jobPosts: ["15", "16"],
  },
  {
    _id: 14,
    name: "Tech Burner",
    location: "Delhi",
    email: "contact@techburner.com",
    contact: "contact@techburner",
    about:
      "Tech Burner is a popular YouTube channel by Shlok Srivastava, known for its engaging and fun tech reviews, gadget unboxings, and tech hacks.",
    profileUrl: "https://th.bing.com/th/id/OIP.FWANbJsVx4_UC02Yp9kh-AHaEc?rs=1&pid=ImgDetMain",
    jobPosts: ["17", "18"],
  },
  {
    _id: 15,
    name: "Amit Bhadana",
    location: "Delhi",
    email: "contact@amitbhadana.com",
    contact: "contact@amitbhadana",
    about:
      "Amit Bhadana is a popular YouTuber known for his comedic sketches and relatable content. His channel features humorous takes on everyday situations and characters.",
    profileUrl: "https://i0.wp.com/www.wikiwiki.in/wp-content/uploads/2021/03/Amit-Bhadana-YouTuber-1.jpg?w=1280&ssl=1",
    jobPosts: ["19", "20"],
  },
  {
    _id: 16,
    name: "Vedantu",
    location: "Bangalore",
    email: "support@vedantu.com",
    contact: "support@vedantu",
    about:
      "Vedantu is a leading ed-tech YouTube channel providing live online classes for students of all ages. The channel covers various subjects and helps students excel academically.",
    profileUrl: "https://asset.brandfetch.io/id-UPM-K5M/idI9LBDWy3.jpeg?updated=1646264362714",
    jobPosts: ["21", "22"],
  },
  {
    _id: 17,
    name: "Ranveer Allahbadia",
    location: "Mumbai",
    email: "contact@emiwaybantai.com",
    contact: "contact@emiwaybantai",
    about:
      "Ranveer Allahbadia is a popular Indian YouTouber, the name of his channel is BeerBiceps, which has over 3.5 million followers. ",
    profileUrl: "https://th.bing.com/th/id/OIP.p3ApxEcg6QTHa29l05wD4gAAAA?rs=1&pid=ImgDetMain",
    jobPosts: ["23", "24"],
  },
  {
    _id: 18,
    name: "Flying Beast",
    location: "Delhi",
    email: "contact@flyingbeast.com",
    contact: "contact@flyingbeast",
    about:
      "Flying Beast is a YouTube channel by Gaurav Taneja, featuring vlogs about his daily life, travel adventures, fitness tips, and his experience as a pilot.",
    profileUrl: "https://th.bing.com/th/id/OIP.wf2aEHqR8KACM2t_J6t1nAAAAA?w=430&h=525&rs=1&pid=ImgDetMain",
    jobPosts: ["25", "26"],
  },
  {
    _id: 19,
    name: "Fit Tuber",
    location: "Punjab",
    email: "contact@fittuber.com",
    contact: "contact@fittuber",
    about:
      "Fit Tuber is a health and fitness YouTube channel by Vivek Mittal, offering tips on healthy living, workout routines, and nutritional advice to help people lead a healthier lifestyle.",
    profileUrl: "https://yt3.ggpht.com/a/AATXAJx1kQ_1nLpzYneNV1n_DjRNwdUXuG3k6zpstA=s900-c-k-c0xffffffff-no-rj-mo",
    jobPosts: ["27", "28"],
  },
  {
    _id: 20,
    name: "Pranjal Kamra",
    location: "Raipur",
    email: "contact@pranjalkamra.com",
    contact: "contact@pranjalkamra",
    about:
      "Pranjal Kamra is a financial expert and YouTuber who provides insightful content on personal finance, investment strategies, and financial planning.",
    profileUrl: "https://ifp.world/wp-content/uploads/2022/08/Pranjal-Kamra.png",
    jobPosts: ["33", "34"],
  },
  ]

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "CodeWaver",
    lastName: "Solutions",
    email: "support@code.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWave,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
