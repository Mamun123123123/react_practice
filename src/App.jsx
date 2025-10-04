
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

import AdminPanel from './components/AdminPanel'
import Login_from from './components/Login_from'
import List_item from './components/List_item'
import Event_handler from './components/Event_handler'
import Counter from './components/Counter'
import Team_list from './components/Team_list'
import Quize from './components/Quize'
import Sum from './async'
import M from './map'
import To_do from './to_do'
import Exercise5 from './Event/Exercise10'
import MyForm from './Form/MyForm'
import CrudApp from './Event/Exercise6'
import Objects_handle from './Crud_App/object'
import Object_list from './Crud_App/Object_list'
import { useState } from 'react'
import Delete from './Crud_App/Delete'
import Voter from './Intern/Voter'
import Form_crud from './Crud_App/form_crud'
import Basic_controlled from './Form/Basic_controlled'
import Delete_Str from './Crud_App/Delete_Str'
import Input from './useRef/Input'
import Form_Create from './useRef/Form_Create'
import Form_using_useRef from './useRef/Form_using_useRef'
// const members = [
//   //  {id:1,name:"k",role:"Fronted",image:"https://randomuser.me/api/portraits/women/66.jpg"},
//   {id:2,name:"L",role:"F",image:"https://randomuser.me/api/portraits/women/63.jpg"},
//   {id:3,name:"M",role:"N",image:"https://randomuser.me/api/portraits/men/1.jpg"},
//   {id:4,name:"W",role:"X",image:"https://randomuser.me/api/portraits/women/63.jpg"}


// ]

function App() {
//   const ob = [
//   {id:1,
//     question:"which is A>",
//     option1:"B",
//     option2:"C",
//     option3:"D",
//     option4:"A",
//     ans:4
//   },
//   {id:2,
//     question:"which is B>",
//     option1:"B",
//     option2:"C",
//     option3:"D",
//     option4:"A",
//     ans:1
//   },
//   {id:3,
//     question:"which is C>",
//     option1:"B",
//     option2:"C",
//     option3:"D",
//     option4:"A",
//     ans:2
//   },
//   {id:4,
//     question:"which is D>",
//     option1:"B",
//     option2:"C",
//     option3:"D",
//     option4:"A",
//     ans:3
//   },
//   {id:5,
//     question:"which is X>",
//     option1:"B",
//     option2:"C",
//     option3:"D",
//     option4:"None",
//     ans:4
//   }
// ]
//  let [index,setIndex] =useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   const checkAnswer = (selected) => {
//     if (selected === ob[index].ans) {
//       setScore(score + 1);
//     }

//     if (index < ob.length - 1) {
//       setIndex(index + 1);
//     } else {
//       setShowResult(true);
//     }
//   };
//     const nextQuestion = () => {
//     if (index < ob.length - 1) {
//       setIndex(index + 1);
//     }
//   } 
  // const isLoggedIN = false
  // let content;
  // if (isLoggedIN) {
  //     content =  <AdminPanel />
  // } else {
  //       content =   <Login_from />
  // }
  return (
    <>
    
   
    {/* <Objects_handle /> */}

   <Form_Create /> 









    

    {/* <div> */}
            {/* <h1 className='font-bold p-2 bg-amber-800 m-2'>Quize App</h1>
            
    {showResult ? (
        <div className="text-center mt-10 font-bold text-2xl text-green-600">
          🎉 Quiz Finished! <br />
          ✅ Your Score: {score} / {ob.length}
        </div>
      ) : (
      <Quize
        question={ob[index].question}
        option1={ob[index].option1}
        option2={ob[index].option2}
        option3={ob[index].option3}
        option4={ob[index].option4}
        ans={ob[index].ans}
        index={index}
        total={ob.length}
        nextQuestion={nextQuestion} 
        checkAnswer={checkAnswer}
        />) }
      
    </div> */}













  

    </>
    
    
  )
}

export default App

