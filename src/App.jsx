
import List from './List'
import Show from './Map'
import Reduce from "./Reduce"
import Longest_Word from './String'
import ShowInfo from "./Destructuring"
import Heads from './Heading'
import Sums from './Destructuring1'
import Ages from './Ternary'
import Button from './Button'
import Buttonn from './Arrow_function'
import Nott from './Images'
import AdminPanel from './components/AdminPanel'
import Login_from from './components/Login_from'

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

    <Nott />
    <br />
    <br />
     {/* {content} */}
    {isLoggedIN ? (<AdminPanel />):(<Login_from />) }
    </>
    
    
  )
}

export default App

