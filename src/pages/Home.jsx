import { RoughNotation } from "react-rough-notation";
import portrait from "../assets/portrait.png";

const journey = [
  {
    domain: "gcu.ac.uk",
    year: "2025-2026",
    title: "Glasgow Caledonian University",
    desc: "Graduated, BSc Software Development",
    url: "https://www.gcu.ac.uk",
    badge: "First Class Honours",
  },
  {
    domain: "glasgowclyde.ac.uk",
    year: "2023-2024",
    title: "Glasgow Clyde College",
    desc: "Computing and software development",
    url: "https://www.glasgowclyde.ac.uk",
  },
  {
    domain: "codeyourfuture.io",
    year: "2023",
    title: "Code Your Future",
    desc: "Full stack developer course, Glasgow",
    url: "https://codeyourfuture.io",
  },
  {
    domain: "hackyourfuture.be",
    year: "2020",
    title: "Hack Your Future",
    desc: "Full stack course, Brussels",
    url: "https://hackyourfuture.be",
  },
];

function TimelineItem(props) {
  const item = props.item;
  const isLast = props.isLast;
  const logoUrl = "https://www.google.com/s2/favicons?domain=" + item.domain + "&sz=64";

  return (
    <div className="relative flex gap-5 pb-6">
      {!isLast ? (
        <div className="absolute left-[19px] top-10 h-10 w-0.5 bg-black/20"></div>
      ) : null}

      <img
        src={logoUrl}
        alt={item.title}
        className="relative z-10 w-10 h-10 rounded-full border-2 border-black object-contain bg-white flex-shrink-0"
      />

      <div>
        <a href={item.url} target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
          <p className="text-xl font-bold text-black">{item.year} - {item.title}</p>
          <p className="text-base text-gray-700 mt-0.5">
            {item.desc}
            {item.badge ? (
              <span className="inline-flex items-center gap-1 ml-2 font-bold" style={{ color: "#758F6B" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4.34L12 21l7-3.48v-4.34L12 17l-7-3.82z" />
                </svg>
                {item.badge}
              </span>
            ) : null}
          </p>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full p-4 md:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <p className="font-bold text-3xl mb-4 inline-block border-b-4" style={{ borderColor: "#ecd1b3", color: "#000000" }}>
            About me
          </p>

          <img
            src={portrait}
            alt="Portrait"
            className="w-44 h-44 sm:w-52 sm:h-52 object-contain mb-6"
          />

          <p className="text-lg leading-relaxed mb-4 text-black">
            Graduate software developer who went from zero coding knowledge to a
            software development degree in six years. I build fast,
            considered interfaces and care about the details.
          </p>
          <p className="text-lg leading-relaxed text-black">
            My path wasn't traditional. Bootcamps, night classes, and a lot
            of stubborn debugging got me here before the degree did. Coding
            for me is learning, growing, and delivering, and I look forward
            to bringing that enthusiasm to every project I work on.{" "}
            <a
              href="about"
              className="inline-block border-b-2 border-green-300 animate-pulse hover:opacity-70 transition"
            >
              Read more about me
            </a>
          </p>
        </div>

        <div>
          <p className="font-bold text-3xl mb-10 inline-block border-b-4" style={{ borderColor: "#88B78B", color: "#000000" }}>
            Coding journey
          </p>

          <div className="relative flex gap-5 pb-6">
            <div className="absolute left-[19px] top-10 h-10 w-0.5 bg-black/20"></div>

            <div className="relative z-10 w-10 h-10 rounded-full border-2 border-black bg-green-100 flex items-center justify-center text-sm font-bold flex-shrink-0">
              ?
              <span className="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-75"></span>
            </div>

            <div className="flex-1 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xl font-bold text-black">2026-2027 - Working at</p>
                <p className="text-base text-gray-700 mt-0.5">Open to opportunities</p>
              </div>

              <div className="text-4xl font-bold hire-me-pulse">
                <RoughNotation type="highlight" show={true} animate={false} color="#C9E4C5" strokeWidth={2} padding={[14, 20]}>
                  <a href="hire-me" className="relative hover:opacity-70 transition">
                    Hire me
                  </a>
                </RoughNotation>
              </div>
            </div>
          </div>

          <div>
            {journey.map(function (item, i) {
              return <TimelineItem key={item.year} item={item} isLast={i === journey.length - 1} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <a href="skills" className="text-2xl font-bold text-black hover:opacity-70 transition inline-block border-b-4 self-start" style={{ borderColor: "#ECD1B3" }}>
          Tools and skills I used &rarr;
        </a>

        <a href="work" className="text-2xl font-bold text-black hover:opacity-70 transition inline-block border-b-4 self-start" style={{ borderColor: "#88B78B" }}>
          Projects I built &rarr;
        </a>

        <a href="learning" className="text-2xl font-bold text-black hover:opacity-70 transition inline-block border-b-4 self-start" style={{ borderColor: "#ECD1B3" }}>
          Ongoing learning &rarr;
        </a>
      </div>
    </div>
  );
}