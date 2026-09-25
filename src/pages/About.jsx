import cat from "../assets/logo.png"

export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-6 md:p-10">
      <div className="max-w-2xl text-black">
        <p
          className="font-bold text-3xl mb-8 inline-block border-b-4"
          style={{ borderColor: "#ecd1b3" }}
        >
          About me
        </p>

        <div className="text-lg leading-relaxed space-y-5">
          <p>
            I'm a Software Developer based in Glasgow with a First-Class Honours
            degree in Software Development. I enjoy solving problems and building
            thoughtful, user-focused applications across both frontend and backend
            development. My strongest experience is with React, TypeScript,
            JavaScript and Node.js, alongside experience with Python, SQL, Docker,
            Git and other modern development tools.
          </p>

          <p>
            My route into technology wasn't a traditional one. I didn't grow up
            coding or always know that I wanted to become a developer. My interest
            started when I attended a beginner programming workshop and discovered
            how much I enjoyed taking a problem, breaking it down and using logic
            and creativity to turn an idea into something that actually worked.
          </p>

          <p>
            That curiosity took me to Social Hackers Academy in Athens in 2019,
            where I learned my first programming fundamentals. I later moved to
            Brussels and joined Hack Your Future, continuing to develop my
            full-stack skills while working alongside people from different
            backgrounds. Those experiences taught me persistence, teamwork,
            adaptability and the importance of continuing to learn when a problem
            doesn't have an obvious solution.
          </p>

          <p>
            After moving to Glasgow, I continued developing my skills through Code
            Your Future and formal study at Glasgow Clyde College. I eventually
            progressed to Glasgow Caledonian University, where I graduated with a
            First-Class Honours degree in Software Development. What started as
            curiosity had become something I wanted to build my career around.
          </p>

          <p>
            Throughout that journey, I've worked on projects both independently
            and as part of Agile development teams. I'm comfortable taking
            ownership of a task and working independently, but I also enjoy
            collaborating with others, sharing ideas, reviewing problems together
            and helping teammates when they get stuck. I've also supported and
            mentored other learners with debugging and understanding unfamiliar
            codebases, which taught me a lot about patience and communicating
            technical ideas clearly.
          </p>

          <p>
            Problem solving is one of the parts of development I enjoy most. When
            something doesn't work, I like breaking the problem into smaller
            pieces, investigating what's happening and testing different solutions
            until I understand the cause. I try not to stop at simply making
            something work — I want to understand why it works and how it could be
            improved.
          </p>

          <p>
            I'm also comfortable communicating with both technical and
            non-technical people. Whether I'm discussing implementation details
            with another developer or explaining an idea to someone without a
            technical background, I try to communicate clearly, listen carefully
            and make sure we're solving the right problem together.
          </p>

          <p>
            Technology changes quickly, so being adaptable is important to me. I
            enjoy learning new technologies, experimenting with new tools and
            keeping my skills up to date. If a project requires something I
            haven't used before, I'm comfortable researching it, asking questions,
            learning from others and putting that knowledge into practice.
          </p>

          <p>
            I have a particular interest in interfaces that feel considered rather
            than complicated for the sake of it. I enjoy clean typography,
            deliberate spacing and small interactions that make an application
            feel polished. This portfolio reflects that approach — I chose the
            hand-drawn, grid-paper style because I wanted it to feel personal
            rather than like another developer template.
          </p>

          <p>
            Outside of software development, I enjoy swimming, cycling and running.
            I also enjoy volunteering and contributing to my community. Both have
            helped me meet people from different backgrounds and strengthened the
            communication, teamwork and interpersonal skills that I also bring to
            my work as a developer.
          </p>

          <p>
            I'm now looking for a graduate or junior software development
            opportunity where I can contribute my technical skills, problem-solving
            mindset and ability to work both independently and as part of a team.
            Most importantly, I'm looking for an environment where I can keep
            learning, take on new challenges, help the people around me and grow
            into a stronger software engineer.
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
              I'm open to graduate and junior opportunities across frontend,
              backend and full-stack development. I bring hands-on development
              experience, strong problem-solving and communication skills, and the
              ability to work independently or collaboratively within a team. I'm
              always ready to learn something new and help others along the way.
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
  );
}