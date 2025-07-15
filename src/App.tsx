import Layout from './components/layout'
import Home from './components/home/index.tsx'
import About from './components/about/index.tsx'

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
