import './App.css'
import './assets/css/header.css'
import './assets/css/firstsection.css'
import './assets/css/shop.css'
import './assets/css/footer.css'
import './assets/Inter.ttf'

import Header from './components/Header'
import FirstSection from './components/FirstSection'
import Shop from './components/Shop'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
      <FirstSection/>
      <Shop/>
      <Footer/>
    </div>
  )
}

export default App
