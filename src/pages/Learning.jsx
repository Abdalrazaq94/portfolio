const aiSkills = [
  {
    title: "AI-Assisted Development",
    color: "#ECD1B3",
    status: "Actively using",
    desc: "Using AI tools as part of my development workflow for exploring solutions, debugging, refactoring, documentation and learning — while reviewing and understanding the code I ship.",
    progress: 80,
  },
  {
    title: "AI Automation",
    color: "#88B78B",
    status: "Building",
    desc: "Learning to design automated workflows that connect AI models with APIs, application logic and external services to solve practical problems and reduce repetitive work.",
    progress: 55,
  },
  {
    title: "LLM Application Development",
    color: "#ECD1B3",
    status: "In progress",
    desc: "Exploring how to integrate large language models into applications through APIs, structured prompts, context management and reliable application workflows.",
    progress: 50,
  },
  {
    title: "Claude Certification",
    color: "#88B78B",
    status: "In progress",
    desc: "Working towards a Claude certification while developing a deeper understanding of effective AI-assisted workflows, responsible usage and building with modern AI tools.",
    progress: 40,
  },
];

const aiFocus = [
  {
    name: "Claude",
    type: "AI",
    note: "Developing practical skills with Claude and working towards certification.",
  },
  {
    name: "AI Automation",
    type: "Automation",
    note: "Experimenting with AI-powered workflows, APIs and task automation.",
  },
  {
    name: "LLM APIs",
    type: "Development",
    note: "Learning how to integrate language models into real software applications.",
  },
  {
    name: "AI-Assisted Software Engineering",
    type: "Workflow",
    note: "Using AI to support debugging, research, refactoring and development while keeping human review at the centre.",
  },
];

function SkillCard({ item }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-black/10">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-xl font-bold">{item.title}</p>

        <span
          className="text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap"
          style={{ backgroundColor: item.color }}
        >
          {item.status}
        </span>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {item.desc}
      </p>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${item.progress}%`,
            backgroundColor: item.color,
          }}
        />
      </div>
    </div>
  );
}

function FocusRow({ resource }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-dashed border-gray-300">
      <div>
        <p className="text-base font-bold">{resource.name}</p>
        <p className="text-sm text-gray-600 mt-0.5">
          {resource.note}
        </p>
      </div>

      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium whitespace-nowrap">
        {resource.type}
      </span>
    </div>
  );
}

export default function Learning() {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 max-w-4xl mx-auto">
      <p
        className="font-bold text-3xl mb-2 inline-block border-b-4"
        style={{ borderColor: "#88B78B" }}
      >
        AI & Automation
      </p>

      <p className="text-lg leading-relaxed mt-6 mb-10 text-black max-w-2xl">
        AI is becoming part of the modern software development toolkit, and
        I'm actively developing the skills to use it effectively rather than
        treating it as a replacement for engineering fundamentals. I'm
        exploring AI-assisted development, LLM application development and
        automation while continuing to strengthen my core software engineering
        skills.
      </p>

      <p className="font-bold text-xl mb-5">
        What I'm developing
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {aiSkills.map((item) => (
          <SkillCard key={item.title} item={item} />
        ))}
      </div>

      <p className="font-bold text-xl mb-5">
        Current AI focus
      </p>

      <div className="flex flex-col">
        {aiFocus.map((resource) => (
          <FocusRow key={resource.name} resource={resource} />
        ))}
      </div>
    </div>
  );
}