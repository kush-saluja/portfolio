export const portfolioData = {
  personal: {
    name: "Kushmeet Singh Saluja",
    title: "Technical Lead & Backend Engineer",
    subtitle: "AI Enthusiast | Cloud-Native Systems Expert",
    email: "singhsalujakushmeet@gmail.com",
    phone: "+91-7404662978",
    linkedin: "https://www.linkedin.com/in/kushmeet-singh-saluja/",
    location: "Gurugram, India",
    summary: "Experienced backend engineer and AI enthusiast with 6+ years building cloud-native, scalable SaaS platforms. Expert in Java, Spring Boot, microservices, and AI-native technologies such as LLMs, RAG, and knowledge graphs. Skilled in RESTful API design, distributed systems, and cross-functional collaboration."
  },

  experience: [
    {
      id: 1,
      company: "Sirion",
      role: "Technical Lead (Backend)",
      duration: "Jan 2024 - Present",
      location: "Gurugram, India",
      achievements: [
        "Led end-to-end design and development of the Ask Sirion AI Agent, projected to drive 20% increase in revenue",
        "Designed and developed CARGO (Centralized AI Routing & Generation Orchestration), cutting development time by over 50%",
        "Built Conversational Search system utilizing LLMs, RAG, and prompt engineering for legal business users",
        "Led cross-functional team of 5 developers, increased team velocity by 45% through process optimization",
        "Mentored three Associate Engineers, contributing to double promotions for two mentees"
      ],
      technologies: ["Java", "Spring Boot", "Spring AI", "LLMs", "RAG", "Neo4j", "Elasticsearch", "Solr"]
    },
    {
      id: 2,
      company: "Sirion",
      role: "Senior Software Engineer (Backend)",
      duration: "Jan 2023 - Dec 2023",
      location: "Gurugram, India",
      achievements: [
        "Led design and development of Sirion's platform encryption feature with customer data keys",
        "Built scalable Key Management Service, introduced BYOK feature reducing go-to-live time by 75%",
        "Developed Sirion-Encrypter client library capable of 20,000 crypto operations per second",
        "Optimized global search by upgrading legacy Apache Solr without data loss or business impact",
        "Implemented cost-saving measures reducing monthly infrastructure costs by 20%"
      ],
      technologies: ["Java", "PostgreSQL", "EhCache", "AWS KMS", "Apache Solr", "Apache Pulsar", "Redis"]
    },
    {
      id: 3,
      company: "Sirion",
      role: "Software Engineer (Backend)",
      duration: "Jan 2021 - Dec 2022",
      location: "Gurugram, India",
      achievements: [
        "Designed scalable Central Notification Service handling 1 million messages per day at peak load",
        "Implemented Exception Alert Framework reducing resource consumption by 85%",
        "Engineered supplier scorecard data aggregation boosting decision-making processes by 30%",
        "Developed Market Intelligence Service for strategic procurement platform",
        "Improved system stability by resolving 100+ critical bugs within specified timelines"
      ],
      technologies: ["Java", "PostgreSQL", "Freemarker", "Apache Pulsar", "Redis", "ANTLR", "SPEL"]
    },
    {
      id: 4,
      company: "Sirion",
      role: "Associate Software Engineer (Backend)",
      duration: "Jul 2019 - Dec 2020",
      location: "Gurugram, India",
      achievements: [
        "Developed Service Level Integration Framework reducing implementation time by 90%",
        "Enhanced entity listing performance by 15-20% through query and code optimization",
        "Elevated code coverage to 85% using Test Containers and JUnit",
        "Facilitated integration with ServiceNow and Cherwell ticketing systems"
      ],
      technologies: ["Java", "PostgreSQL", "Quartz Scheduler", "JUnit", "Test Containers"]
    }
  ],

  skills: {
    languages: ["Java", "Python", "GO"],
    frameworks: ["Spring Boot", "Spring AI", "FastAPI"],
    databases: ["PostgreSQL", "Redis", "NoSQL", "Vector Databases"],
    tools: ["Apache Solr", "Apache Pulsar", "Elastic APM", "Git", "New Relic", "Docker"],
    cloud: ["AWS", "IBM Cloud", "Azure"],
    concepts: [
      "System Design", "Design Patterns", "Distributed Systems", "Microservices", 
      "Event-Driven Architecture", "RESTful API Design", "LLMs", "RAG", "Vector Search",
      "Prompt Engineering", "AI Engineering", "Performance Tuning", "Observability"
    ]
  },

  education: [
    {
      id: 1,
      institution: "National Institute Of Technology (NIT) Kurukshetra",
      degree: "Bachelor of Technology, Information Technology",
      duration: "Jul 2015 - May 2019",
      gpa: "9.1",
      location: "Kurukshetra, India"
    },
    {
      id: 2,
      institution: "John Milton Public School",
      degree: "Senior Secondary",
      duration: "Completed",
      gpa: "96%",
      location: "India"
    }
  ],

  projects: [
    {
      id: 1,
      name: "Ask Sirion AI Agent",
      description: "End-to-end AI agent enabling natural language interaction across contract lifecycle functions",
      technologies: ["Java", "Spring AI", "LLMs", "RAG", "NLP"],
      impact: "Projected to drive 20% revenue increase"
    },
    {
      id: 2,
      name: "CARGO Platform",
      description: "Centralized AI Routing & Generation Orchestration platform for multi-tenancy and LLM management",
      technologies: ["Java", "Spring Boot", "Vector Databases", "LLM Routing"],
      impact: "Reduced development time by 50%+"
    },
    {
      id: 3,
      name: "Key Management Service",
      description: "Scalable in-house KMS with BYOK feature and cloud KMS integrations",
      technologies: ["Java", "PostgreSQL", "AWS KMS", "Azure KMS", "IBM Cloud KMS"],
      impact: "Reduced go-to-live time by 75%"
    }
  ]
};