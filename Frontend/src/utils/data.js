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
      profileUrl: Twitter,
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
    name: "Microsoft Corporation",
    location: "Califonia",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  {
    _id: 9,
    name: "CodeWave Solutions",
    location: "Ghana",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWave,
    jobPosts: ["1", "2"],
  },
];

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
