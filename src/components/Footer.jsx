export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-black" style={{ backgroundColor: "#F4EFE6" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <p className="text-4xl font-bold text-black mb-8">Let's build something.</p>

        <div className="flex flex-wrap gap-8 mb-10">
          <a href="https://github.com/Abdalrazaq94" target="_blank" rel="noreferrer" className="text-lg font-bold text-black hover:opacity-70 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/abdalrazaq94t" target="_blank" rel="noreferrer" className="text-lg font-bold text-black hover:opacity-70 transition">LinkedIn</a>
          <a href="mailto:abd.94t@gmail.com" className="text-lg font-bold text-black hover:opacity-70 transition">Email</a>
        </div>

        <div className="border-t border-black/20 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-black/70">
          <span>&copy; {year} - All rights reserved.</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  );
}