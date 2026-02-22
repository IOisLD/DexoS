import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills   from './components/Skills'
import Awards   from './components/Awards'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Awards />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}