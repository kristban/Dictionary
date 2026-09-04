import './App.css'
import logo from './assets/logo.png'
import Dictionary from './Dictionary'

function App() {
  

  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img className="title" src={logo} alt="pepper" />
        Dictionary
        <a href="https://canine-companion.vercel.app/" target="_blank" className='btn btn-primary shadow'>Canine Companion</a>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by myself
      </footer>
      </div>
    </div>
  )
}

export default App
