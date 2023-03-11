import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter >
      <div className="relative text-white z-0 min-h-screen bg-primary">
        <div className="bg-hero-pattern bg-cover bg-bg-no-repeat bg-center">
          <Navbar />
          <Hero />  
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
