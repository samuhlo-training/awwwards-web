import About from './sections/About'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default App
