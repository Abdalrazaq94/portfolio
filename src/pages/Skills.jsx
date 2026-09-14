const categories = [
  {
    title: "Frontend",
    color: "#ECD1B3",
    skills: [
      { name: "React", note: "Component architecture, hooks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vite", note: "Build tooling, dev setup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "Tailwind CSS", note: "Utility-first styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", note: "ES6+, async patterns", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Backend",
    color: "#88B78B",
    skills: [
      { name: "Node.js", note: "Server-side JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "REST APIs", note: "Design and consumption", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "PostgreSQL", note: "Relational databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "Tools",
    color: "#ECD1B3",
    skills: [
      { name: "Git", note: "Version control, branching", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", note: "Daily driver editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", note: "Basic design handoff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
];

function SkillRow(props) {
  const s = props.skill;
  return (
    <div className="flex items-center gap-4 py-3 border-b border-dashed border-gray-300">
      <img src={s.icon} alt={s.name} className="w-8 h-8 object-contain flex-shrink-0" />
      <div>
        <p className="text-lg font-bold text-black">{s.name}</p>
        <p className="text-sm text-gray-600">{s.note}</p>
      </div>
    </div>
  );
}

function CategoryBlock(props) {
  const cat = props.category;
  return (
    <div className="mb-14">
      <p className="font-bold text-2xl mb-4 inline-block border-b-4" style={{ borderColor: cat.color }}>
        {cat.title}
      </p>

      <div>
        {cat.skills.map(function (s) {
          return <SkillRow key={s.name} skill={s} />;
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 max-w-2xl mx-auto">
      <p className="font-bold text-3xl mb-10 inline-block border-b-4" style={{ borderColor: "#88B78B" }}>
        Skills and tools
      </p>

      {categories.map(function (cat) {
        return <CategoryBlock key={cat.title} category={cat} />;
      })}
    </div>
  );
}