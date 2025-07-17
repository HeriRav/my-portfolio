import Layout from './components/layout'
import Home from './pages/home/index.tsx'
import About from './pages/about/index.tsx'

function App() {

  return (
    <>
      <Layout>
        <Home />
        <About />
      </Layout>
    </>
  )
}

export default App
