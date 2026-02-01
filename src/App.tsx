import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/sections/Hero'
import { Education } from './components/sections/Education'

function App() {

  return (
    <div className="">
      <Navbar />
      <main className='flex flex-col'>
        <Hero />
        <Education />
      </main>
      <Footer/>
    </div>
  )
}

export default App
