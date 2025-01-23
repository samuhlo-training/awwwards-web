import About from './sections/About'
import Features from './sections/Features'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App
