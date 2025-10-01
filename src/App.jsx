
import List from './components/List'
import Show from './components/Map'
import Reduce from "./components/Reduce"
import Longest_Word from './components/String'
import ShowInfo from "./components/Destructuring"
import Heads from './components/Heading'
import Sums from './components/Destructuring1'
import Ages from './components/Ternary'
import Button from './components/Button'
import Buttonn from './components/Arrow_function'
import Nott from './components/Images'
import AdminPanel from './components/AdminPanel'
import Login_from from './components/Login_from'
import List_item from './components/List_item'
import Event_handler from './components/Event_handler'
function App() {
 
  const isLoggedIN = false
  // let content;
  // if (isLoggedIN) {
  //     content =  <AdminPanel />
  // } else {
  //       content =   <Login_from />
  // }
  return (
    <>
    < List_item />
    <br />
    <Button />
    <br />
    <Ages />
    <br />
    <Buttonn />
    
    <br />
    <Show />
    <br />
    // <List />
    <br />
    // <Reduce />
    <br />
    // <Longest_Word />
    <br />
    // <ShowInfo />
    <br />
    // <Heads/>
    <br />
    // <Sums />
    
    <br />
    <Event_handler /> 
    <br />
    <Event_handler /> 
    <br />
    <br />
    <Nott />
    <br />
    <br />
     {/* {content} */}
    {isLoggedIN ? (<AdminPanel />):(<Login_from />) }
    </>
    
    
  )
}

export default App

