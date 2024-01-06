import Navbar from './Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

function App() {
  let Component

  switch (window.location.pathname) {
    case '/':
      Component = Home
      break
    case '/pricing':
      Component = Pricing
      break
    case '/about':
      Component = About
      break
    default:
      Component = <h1>Unknown</h1>
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  )
}

export default App
