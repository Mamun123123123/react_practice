// import React, { useState } from 'react'

// const Quize = ({question,option1,option2,option3,option4,ans}) => {
    
//     return (
//         <div className='text-center mt-10 border-2 m-90 shadow-2xl'>
//             <hr />
//             <h2 className='font-bold text-green-400 p-2 bg-amber-50 m-2 shadow-2xl'>{question} </h2>
//             <div>
//                 <ul>
//                     <li className='border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 transition-all ' >{option1}</li>
//                     <li className='border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 transition-all '>{option2}</li>
//                     <li className='border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 transition-all '>{option3}</li>
//                     <li className='border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 transition-all '>{option4}</li>
//                 </ul>
//             </div>

//             <button className='w-50 rounded-3xl p-2 m-2  hover:bg-amber-500 bg-blue-300' onClick={nextQuestion}>Next</button>
//             <div className="p-2 font-bold animate-pulse">{index + 1} of 5 questions</div>
//         </div>
//     )
// }

// export default Quize

// import React from "react";

// const Quize = ({ question, option1, option2, option3, option4, ans, index, total, nextQuestion }) => {
//   return (
//     <div className="text-center mt-10 border-2 shadow-2xl p-4">
//       <h2 className="font-bold text-green-400 p-2 bg-amber-50 m-2 shadow-2xl">{question}</h2>

//       <ul>
//         <li className="border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500">{option1}</li>
//         <li className="border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500">{option2}</li>
//         <li className="border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500">{option3}</li>
//         <li className="border-2 rounded-4xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500">{option4}</li>
//       </ul>

//       <button onClick={nextQuestion} className="w-50 rounded-3xl p-2 m-2 hover:bg-amber-500 bg-blue-300">
//         Next
//       </button>

//       <div className="p-2 font-bold animate-pulse">
//         {index + 1} of {total} questions
//       </div>
//     </div>
//   );
// };

// export default Quize;

import React from "react";

const Quize = ({ question, option1, option2, option3, option4, ans, index, total, checkAnswer }) => {
  return (
    <div className="text-center mt-10 border-2 shadow-2xl p-4">
      <h2 className="font-bold text-green-400 p-2 bg-amber-50 m-2 shadow-2xl">{question}</h2>

      <ul>
        <li className="border-2 rounded-3xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 cursor-pointer" onClick={() => checkAnswer(1)}>{option1}</li>
        <li className="border-2 rounded-3xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 cursor-pointer" onClick={() => checkAnswer(2)}>{option2}</li>
        <li className="border-2 rounded-3xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 cursor-pointer" onClick={() => checkAnswer(3)}>{option3}</li>
        <li className="border-2 rounded-3xl shadow-2xl p-2 m-2 bg-blue-100 hover:bg-amber-500 cursor-pointer" onClick={() => checkAnswer(4)}>{option4}</li>
      </ul>

      <div className="p-2 font-bold animate-pulse">
        {index + 1} of {total} questions
      </div>
    </div>
  );
};

export default Quize;
