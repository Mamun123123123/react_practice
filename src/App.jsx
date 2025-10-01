
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
import { useState } from 'react'
// const members = [
//   //  {id:1,name:"k",role:"Fronted",image:"https://randomuser.me/api/portraits/women/66.jpg"},
//   {id:2,name:"L",role:"F",image:"https://randomuser.me/api/portraits/women/63.jpg"},
//   {id:3,name:"M",role:"N",image:"https://randomuser.me/api/portraits/men/1.jpg"},
//   {id:4,name:"W",role:"X",image:"https://randomuser.me/api/portraits/women/63.jpg"}


// ]

function App() {
  const ob = [
  {id:1,
    question:"which is A>",
    option1:"B",
    option2:"C",
    option3:"D",
    option4:"A",
    ans:4
  },
  {id:2,
    question:"which is B>",
    option1:"B",
    option2:"C",
    option3:"D",
    option4:"A",
    ans:1
  },
  {id:3,
    question:"which is C>",
    option1:"B",
    option2:"C",
    option3:"D",
    option4:"A",
    ans:2
  },
  {id:4,
    question:"which is D>",
    option1:"B",
    option2:"C",
    option3:"D",
    option4:"A",
    ans:3
  },
  {id:5,
    question:"which is X>",
    option1:"B",
    option2:"C",
    option3:"D",
    option4:"None",
    ans:4
  }
]
 let [index,setIndex] =useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = (selected) => {
    if (selected === ob[index].ans) {
      setScore(score + 1);
    }

    if (index < ob.length - 1) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };
    const nextQuestion = () => {
    if (index < ob.length - 1) {
      setIndex(index + 1);
    }
  } 
  // const isLoggedIN = false
  // let content;
  // if (isLoggedIN) {
  //     content =  <AdminPanel />
  // } else {
  //       content =   <Login_from />
  // }
  return (
    <>

    <div>
            <h1 className='font-bold p-2 bg-amber-800 m-2'>Quize App</h1>
            
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
      
    </div>













      {/* <div>
      <h1 className='text-center mb-6 font-bold'>team member list</h1>

      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
      members.map(item => {
        return <Team_list key={item.id} 
        name={item.name} 
        role={item.role}
         image={item.image}/>
      })
    }
      </div> */}
    
    
    {/* <Counter /> */}
    {/* < List_item /> */}
    <br />
    {/* <Button /> */}
    <br />
    {/* <Ages /> */}
    <br />
    {/* <Buttonn /> */}
    
    <br />
    {/* <Show /> */}
    <br />
    {/* // <List /> */}
    <br />
    {/* // <Reduce /> */}
    <br />
    {/* // <Longest_Word /> */}
    <br />
    {/* // <ShowInfo /> */}
    <br />
    {/* // <Heads/> */}
    <br />
    {/* // <Sums /> */}
    
    <br />
    {/* <Event_handler />  */}
    <br />
    {/* <Event_handler />  */}
    <br />
    <br />
   
    <br />
    <br />
     {/* {content} */}
    {/* {isLoggedIN ? (<AdminPanel />):(<Login_from />) } */}
    </>
    
    
  )
}

export default App

