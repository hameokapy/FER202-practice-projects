import './App.css'
import Counter from './components/Counter'
import HelloWorld from './components/HelloWorld'
import SelfIntroduction from './components/SelfIntroduction'
import SimpleCard from './components/SimpleCard'
import SimpleWebsite from './components/SimpleWebsite'

function App() {
  const item = {
      url: "https://images.seeklogo.com/logo-png/25/2/fpt-university-logo-png_seeklogo-252587.png",
      title: "Hoai Nguyen - FPT DaNang",
      desc: "Mobile: 0982827763"
  }

  return (
    <>
      <SelfIntroduction name="?name?"/>
      <HelloWorld/>
      <Counter/>

      <br/>
      <hr />
      <SimpleCard item={item}/>

      <hr />
      <SimpleWebsite />
    </>
  )
}

export default App
