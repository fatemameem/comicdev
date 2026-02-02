import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/sections/Hero'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'

function App() {

  return (
    <div className="">
      <Navbar />
      <main className='flex flex-col'>
        <Hero />
        <Education />
        <Experience />
      </main>
      <Footer/>
    </div>
  )
}

export default App
