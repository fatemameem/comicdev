import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/sections/Hero'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { AdditionalExperience } from './components/sections/AdditionalExperience'
import { Projects } from './components/sections/Projects'
import { Voluntary } from './components/sections/Volunteer'
import { Contact } from './components/sections/Contact'

function App() {

  return (
    <div className="">
      <Navbar />
      <main className='flex flex-col'>
        <Hero />
        <Education />
        <Experience />
        <Projects/>
        <Voluntary/>
        <AdditionalExperience />
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
