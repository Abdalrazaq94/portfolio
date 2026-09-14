import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GridPattern from './components/GridPattern'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CvModal from './components/CvModal'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Work from "./pages/Work"
import Learning from "./pages/Learning"
import HireMe from "./pages/HireMe"

function App() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-full">
        <GridPattern
          width={40}
          height={40}
          strokeWidth={1}
          className="fixed inset-0 z-0 fill-black/5 stroke-black/10"
        />

        <div className="relative z-10">
          <Navbar onOpenCv={function () { setCvOpen(true); }} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/hire-me" element={<HireMe />} />
          </Routes>

          <Footer />
        </div>

        <CvModal isOpen={cvOpen} onClose={function () { setCvOpen(false); }} />
      </div>
    </BrowserRouter>
  )
}

export default App