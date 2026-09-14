import { useState } from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projectsData";

function getAllTags() {
  const tagSet = new Set();
  allProjects.forEach(function (p) {
    p.tags.forEach(function (t) {
      tagSet.add(t);
    });
  });
  return Array.from(tagSet).sort();
}

function ProjectCard(props) {
  const p = props.project;

  return (
    <div className="flex flex-col rounded-2xl p-6" style={{ backgroundColor: "#F4EFE6" }}>
<div
className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-black/10"  style={{
    backgroundImage: "url(" + p.cardImage + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  role="img"
  aria-label={p.title}
></div>

      <p className="text-xl font-bold mb-2">{p.title}</p>
      <p className="text-sm text-gray-700 mb-1">{p.tags.join(" • ")}</p>
      <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">{p.cardDesc}</p>

      <Link
        to={"/project/" + p.slug}
        className="relative inline-flex items-center justify-center self-start px-6 py-3 text-base font-medium text-white group"
      >
        <span
          className="absolute inset-0 rounded-lg translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
          style={{ backgroundColor: "#B4D9B0" }}
        />
        <span className="absolute inset-0 rounded-lg bg-black transition-transform duration-200 group-hover:-translate-y-0.5" />
        <span className="relative z-10 inline-flex items-center gap-2">
          View project
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </span>
      </Link>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");
  const allTags = getAllTags();

  const filteredProjects =
    activeTag === "All"
      ? allProjects
      : allProjects.filter(function (p) {
          return p.tags.indexOf(activeTag) !== -1;
        });

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <p className="font-bold text-3xl mb-6">Projects</p>

      <div className="flex items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 4h18l-7 8v6l-4 2v-8z" />
        </svg>
        <span className="text-sm text-gray-500">Filter by technology</span>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={function () { setActiveTag("All"); }}
          className="relative px-5 py-2.5 rounded-full text-sm font-bold transition shadow-md"
          style={{
            backgroundColor: activeTag === "All" ? "#000000" : "#ffffff",
            color: activeTag === "All" ? "#ffffff" : "#000000",
          }}
        >
          ALL
        </button>

        {allTags.map(function (tag) {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={function () { setActiveTag(tag); }}
              className="relative px-5 py-2.5 rounded-full text-sm font-bold transition shadow-md"
              style={{
                backgroundColor: isActive ? "#F3C89E" : "#ffffff",
                color: "#000000",
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(function (p) {
          return <ProjectCard key={p.slug} project={p} />;
        })}
      </div>
    </div>
  );
}