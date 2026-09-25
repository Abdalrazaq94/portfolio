const categories = [
  {
    title: "Frontend",
    color: "#ECD1B3",
    skills: [
      { name: "React", note: "Components, hooks and application development" },
      { name: "TypeScript", note: "Typed React and frontend development" },
      { name: "JavaScript", note: "ES6+, asynchronous programming and application logic" },
      { name: "HTML", note: "Semantic and accessible page structure" },
      { name: "CSS", note: "Responsive layouts and custom styling" },
      { name: "SASS", note: "Structured and maintainable stylesheets" },
      { name: "Tailwind CSS", note: "Utility-first responsive styling" },
      { name: "Vite", note: "Frontend tooling and development setup" },
      { name: "React Router", note: "Client-side routing and navigation" },
      { name: "Framer Motion", note: "UI animations and interactions" },
      { name: "Responsive Design", note: "Mobile-friendly interfaces and layouts" },
    ],
  },

  {
    title: "Backend & APIs",
    color: "#88B78B",
    skills: [
      { name: "Node.js", note: "Server-side JavaScript development" },
      { name: "Express", note: "Backend applications and API development" },
      { name: "Python", note: "Application logic and backend development" },
      { name: "Flask", note: "Python REST API development" },
      { name: "REST APIs", note: "API integration and development" },
      { name: "JWT", note: "Authentication and protected application routes" },
      { name: "C# / .NET", note: "Software development fundamentals" },
    ],
  },

  {
    title: "Databases & Data",
    color: "#ECD1B3",
    skills: [
      { name: "SQL", note: "Queries, relational data and database fundamentals" },
      { name: "PostgreSQL", note: "Relational application databases" },
      { name: "MySQL", note: "SQL and relational database development" },
      { name: "Oracle", note: "SQL and database fundamentals" },
      { name: "MongoDB", note: "NoSQL database development" },
      { name: "Supabase", note: "PostgreSQL-backed application development" },
      { name: "Database Design", note: "Relational modelling and application data" },
    ],
  },

  {
    title: "Cloud, DevOps & Tools",
    color: "#88B78B",
    skills: [
      { name: "Git", note: "Version control and collaborative development" },
      { name: "GitHub", note: "Repositories, collaboration and project management" },
      { name: "Docker", note: "Containerised development and deployment" },
      { name: "Linux", note: "Development environment and command-line fundamentals" },
      { name: "AWS", note: "Cloud platform fundamentals" },
      { name: "Google Cloud Platform", note: "Cloud platform fundamentals" },
      { name: "Render", note: "Application and API deployment" },
      { name: "Node-RED", note: "IoT simulation and event-driven workflows" },
    ],
  },

  {
    title: "Web3 & Emerging Technology",
    color: "#ECD1B3",
    skills: [
      { name: "Solidity", note: "Ethereum smart contract development" },
      { name: "Hardhat", note: "Smart contract development and testing" },
      { name: "Web3", note: "Decentralised application development" },
      { name: "IoT", note: "Sensor simulation and real-time application data" },
    ],
  },

  {
    title: "Mobile & Other Languages",
    color: "#88B78B",
    skills: [
      { name: "Java", note: "Programming and Android development fundamentals" },
      { name: "Android", note: "Mobile application development" },
      { name: "Kotlin", note: "Currently learning" },
      { name: "Objective-C", note: "Currently learning" },
    ],
  },

  {
    title: "Design & Development Practices",
    color: "#ECD1B3",
    skills: [
      { name: "UI/UX Design", note: "User-focused interface design" },
      { name: "Figma", note: "Interface design and prototyping" },
      { name: "Agile / Scrum", note: "Collaborative Agile development" },
      { name: "Project Management", note: "Planning and coordinating project work" },
      { name: "Troubleshooting", note: "Debugging and technical problem solving" },
      { name: "Software Testing", note: "Testing and debugging during development" },
    ],
  },

  {
    title: "Professional Skills",
    color: "#88B78B",
    skills: [
      { name: "Problem Solving", note: "Breaking down and solving technical problems" },
      { name: "Teamwork", note: "Working effectively in collaborative development teams" },
      { name: "Independent Working", note: "Taking ownership and delivering work independently" },
      { name: "Communication", note: "Communicating with technical and non-technical people" },
      { name: "Mentoring", note: "Supporting learners with debugging and code understanding" },
      { name: "Adaptability", note: "Learning new technologies and adapting to changing requirements" },
      { name: "Continuous Learning", note: "Actively developing technical knowledge and skills" },
    ],
  },
];

function SkillRow({ skill }) {
  return (
    <div className="py-3 border-b border-dashed border-gray-300">
      <p className="text-lg font-bold text-black">{skill.name}</p>
      <p className="text-sm text-gray-600 mt-0.5">{skill.note}</p>
    </div>
  );
}

function CategoryBlock({ category }) {
  return (
    <div className="mb-14">
      <p
        className="font-bold text-2xl mb-4 inline-block border-b-4"
        style={{ borderColor: category.color }}
      >
        {category.title}
      </p>

      <div>
        {category.skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 max-w-4xl mx-auto">
      <p
        className="font-bold text-3xl mb-4 inline-block border-b-4"
        style={{ borderColor: "#88B78B" }}
      >
        Skills & tools
      </p>

      <p className="text-lg leading-relaxed mt-4 mb-12 text-black max-w-2xl">
        Technologies and tools I've used across university, independent,
        freelance and collaborative projects. I'm comfortable learning new
        technologies when a project requires them and enjoy working across
        different parts of the software development lifecycle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {categories.map((category) => (
          <CategoryBlock key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}