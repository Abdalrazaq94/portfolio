export default function HireMe() {
  return (
    <div className="w-full min-h-screen p-4 md:p-10 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative w-4 h-4 rounded-full bg-green-500 flex-shrink-0">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping"></span>
        </div>
        <p className="text-sm font-bold text-green-700">Currently available</p>
      </div>

      <p className="font-bold text-4xl mb-6">
        Let's work together.
      </p>

      <p className="text-lg leading-relaxed text-black mb-6 max-w-xl">
        I'm a front-end developer with a BSc in Software Development,
        looking for my next role — full stack, front-end, or back-end.
        I pick up new technologies fast, care deeply about clean and
        considered interfaces, and I'm ready to start soon.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="bg-white rounded-xl p-4 border border-black/10">
          <p className="text-sm text-gray-500 mb-1">Looking for</p>
          <p className="text-lg font-bold">Full-time roles</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-black/10">
          <p className="text-sm text-gray-500 mb-1">Focus</p>
          <p className="text-lg font-bold">Front-end / Full stack</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-black/10">
          <p className="text-sm text-gray-500 mb-1">Location</p>
          <p className="text-lg font-bold">Glasgow, UK</p>
        </div>
      </div>

      <p className="font-bold text-2xl mb-5">Why work with me</p>

      <div className="flex flex-col gap-4 mb-12">
        <div className="flex gap-3">
          <span className="text-lg font-bold" style={{ color: "#88B78B" }}>&#8226;</span>
          <p className="text-base text-black">
            I care about the details others skip — spacing, hover states,
            and interfaces that feel considered rather than thrown together.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-lg font-bold" style={{ color: "#88B78B" }}>&#8226;</span>
          <p className="text-base text-black">
            I learn fast under pressure — my whole path into this field
            was built on picking up new tools quickly and applying them
            immediately.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-lg font-bold" style={{ color: "#88B78B" }}>&#8226;</span>
          <p className="text-base text-black">
            I iterate rather than settle — you can see that philosophy
            across every project on this site.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:abd.94t@gmail.com"
          className="inline-block px-7 py-3 text-base font-bold rounded-full hover:opacity-85 transition"
          style={{ backgroundColor: "#ECD1B3" }}
        >
          Email me
        </a>

        <a
          href="https://www.linkedin.com/in/abdalrazaq94t"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-7 py-3 text-base font-bold rounded-full hover:opacity-85 transition text-white"
          style={{ backgroundColor: "#88B78B" }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}