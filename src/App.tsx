import Layout from './components/layout'
import Home from './pages/home/index.tsx'
import Works from './pages/works/index.tsx'
import Skills from './pages/skills/index.tsx'
import Formations from './pages/formations/index.tsx'
import About from './pages/about/index.tsx'
// import Contact from './pages/contact/index.tsx'

function App() {

  return (
    <>
      <Layout>
        <Home />
        <Works />
        <Skills />
        <About />
        <Formations />
        {/* <Contact /> */}
      </Layout>
    </>
  )
}

export default App
