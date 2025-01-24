import About from './sections/About'
import Contact from './sections/Contact'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Story from './sections/Story'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
