import React from 'react'

const products = [
  { title: 'Cabbage', id: 1,isFruit :false },
  { title: 'Garlic', id: 2 ,isFruit :false},
  { title: 'Apple', id: 3 ,isFruit:true},
];
const List_item = () => {

    
  return (
    <div>
      {
        products.map(item => {
            return (
                <ul>
                    <li className={`${item.isFruit ? "text-green-400" : "text-red-600"}`}>{item.id}.{item.title}</li>
                </ul>
            )
        })
      }
    </div>
  )
}

export default List_item
