import cat from "../assets/cat.png";

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-10">
      <div className="max-w-2xl text-black">
        <p className="font-bold text-3xl mb-8 inline-block border-b-4" style={{ borderColor: "#ecd1b3" }}>
          About me
        </p>

        <div className="text-lg leading-relaxed space-y-5">
          <p>
            I'm a front-end developer based in Glasgow, originally from Jordan, and my path into
            tech didn't follow a straight line. I didn't grow up coding or studying computer
            science from an early age. My interest in this field started later, almost by
            accident, when I stumbled into a beginner workshop and realized how much I enjoyed
            the process of building something from nothing but logic and a blank screen.
          </p>

          <p>
            That first spark led me to Social Hackers Academy in Athens in 2019, where I learned
            the absolute basics: what a variable is, how a browser actually renders a page, and
            why semicolons matter more than I expected. It was overwhelming at first, but it was
            also the first time I felt genuinely excited about learning something technical.
            From there, I moved to Brussels to join Hack Your Future, a program built specifically
            for people rebuilding their lives and careers from scratch. That experience shaped a
            lot of how I think about resilience, community, and the value of showing up
            consistently even when progress feels slow.
          </p>

          <p>
            In 2023, I joined Code Your Future for a more structured full-stack developer course,
            which is where things really started clicking. I stopped just following tutorials and
            started understanding why code worked the way it did. That same year, I enrolled at
            Glasgow Clyde College to study computing and software development formally, which
            gave me the academic foundation to go alongside everything I'd picked up through
            bootcamps and self-teaching. I carried that momentum into Glasgow Caledonian
            University, where I completed my degree in software development between 2025 and
            2026.
          </p>

          <p>
            Looking back, the six years it took me to get here weren't wasted, even the slow
            parts. Every bootcamp, every late night debugging a problem that turned out to be a
            missing bracket, every course I almost gave up on — all of it built the version of me
            that actually understands what it means to build software, not just how to make it
            technically work.
          </p>

          <p>
            Today, I care most about writing interfaces that feel considered — not flashy for the
            sake of it, but genuinely thought through. I like clean typography, deliberate spacing,
            and small interactions that make a site feel alive without being distracting. This
            portfolio itself is a good example of that philosophy in action: I built it as a
            hand-sketched, grid-paper style site because I wanted something that felt personal
            rather than templated, and I've rebuilt parts of it more times than I'd like to admit
            while learning what actually works.
          </p>

          <p>
            Outside of writing code, I spend a lot of time just tinkering — trying new layout
            ideas, breaking things on purpose to understand why they work, and slowly refining
            small details that most people would never notice but that matter to me. I think that
            habit of iterating, rather than settling for the first working version, is probably
            the most useful thing I've carried over from bootcamp culture into how I approach
            real projects.
          </p>

          <p>
            I'm currently open to opportunities where I can keep growing as a developer,
            ideally somewhere that values thoughtful, well-built interfaces as much as I do.
            If you're reading this and think we might be a good fit, I'd genuinely love to hear
            from you.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="w-56 h-56 flex-shrink-0 overflow-hidden">
            <img
              src={cat}
              alt="Working"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="font-bold text-2xl mb-4">Work with me</p>

            <p className="text-lg leading-relaxed mb-6 text-black">
              I'm ready for work — whether that's full stack, front-end, or
              back-end. I pick up new technologies fast when a project calls
              for it, and I'm looking for a team where I can keep growing.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:abd.94t@gmail.com"
                className="inline-block px-7 py-3 text-base font-bold rounded-full hover:opacity-85 transition"
                style={{ backgroundColor: "#ECD1B3" }}
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/abdalrazaq94t/"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-7 py-3 text-base font-bold rounded-full hover:opacity-85 transition text-white"
                style={{ backgroundColor: "#88B78B" }}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}