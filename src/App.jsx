import './App.css'
import logo from './assets/dictionary-logo.png'
import Dictionary from './Dictionary'

function App() {
  

  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img className="logo" src={logo} alt="pepper" />
        Dictionary
        
      </header>
      <main>
        <Dictionary defaultKeyword="moon" />
      </main>
      <footer className="App-footer">
        Coded by myself
      </footer>
      </div>
    </div>
  )
}

export default App
