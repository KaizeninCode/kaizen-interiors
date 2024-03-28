import Nav from "./components/Nav"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"

function App() {
  return (
    <main className="bg-black w-full min-h-screen">
      <Hero/>
      <About/>
      <Testimonials/>
      <Contact/>
    </main>
  )
}

export default App