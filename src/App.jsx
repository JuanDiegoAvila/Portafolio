import './styles/App.css'
import Intro from './Intro'
import Lenguajes from './Lenguajes'
import Software from './Software'
import SobreMi from './SobreMi'

const App = () => (
  <div className="general-container">
    <Intro />
    <SobreMi />
    <Lenguajes />
    <Software />
  </div>
)

export default App
