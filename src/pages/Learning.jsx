const currentlyLearning = [
  {
    title: "TypeScript",
    color: "#ECD1B3",
    status: "In progress",
    desc: "Adding static typing to my React projects to catch bugs earlier and write more confident code.",
    progress: 60,
  },
  {
    title: "Next.js",
    color: "#88B78B",
    status: "Just started",
    desc: "Exploring server-side rendering and the app router, since a lot of jobs list it as a requirement alongside React.",
    progress: 25,
  },
  {
    title: "System design basics",
    color: "#ECD1B3",
    status: "In progress",
    desc: "Reading about scalability, databases, and API design patterns to think beyond just the front-end.",
    progress: 40,
  },
];

const resources = [
  { name: "Refactoring UI", type: "Book", note: "Currently learning layout and spacing principles" },
  { name: "Total TypeScript", type: "Course", note: "Working through advanced generics" },
  { name: "Kent C. Dodds blog", type: "Blog", note: "Reading through testing best practices" },
];

function LearningCard(props) {
  const item = props.item;

  return (
    <div className="bg-white rounded-xl p-5 border border-black/10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xl font-bold">{item.title}</p>
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ backgroundColor: item.color }}
        >
          {item.status}
        </span>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-4">{item.desc}</p>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: item.progress + "%", backgroundColor: item.color }}
        />
      </div>
    </div>
  );
}

function ResourceRow(props) {
  const r = props.resource;

  return (
    <div className="flex items-center justify-between py-3 border-b border-dashed border-gray-300">
      <div>
        <p className="text-base font-bold">{r.name}</p>
        <p className="text-sm text-gray-600 mt-0.5">{r.note}</p>
      </div>
      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
        {r.type}
      </span>
    </div>
  );
}

export default function Learning() {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 max-w-4xl mx-auto">
      <p className="font-bold text-3xl mb-2 inline-block border-b-4" style={{ borderColor: "#88B78B" }}>
        Ongoing learning
      </p>

      <p className="text-lg leading-relaxed mt-6 mb-10 text-black max-w-xl">
        I don't think you're ever really done learning as a developer. Here's
        what I'm actively working through right now, and the resources
        helping me get there.
      </p>

      <p className="font-bold text-xl mb-5">Currently learning</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {currentlyLearning.map(function (item) {
          return <LearningCard key={item.title} item={item} />;
        })}
      </div>

      <p className="font-bold text-xl mb-5">Resources I'm using</p>

      <div className="flex flex-col">
        {resources.map(function (r) {
          return <ResourceRow key={r.name} resource={r} />;
        })}
      </div>
    </div>
  );
}