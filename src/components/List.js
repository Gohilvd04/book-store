import React from 'react'
import Title from './Title'
function List() {
    const persons = [
        {
            id:1,
            title:'Vishal',
            desc:'I am vishal'
        },
        {
            id:2,
            name:'Sahil',
            desc:'I am sahil'
        },
        {
            id:3,
            name:'Ankit',
            desc:'I am ankit'
        },
        {
            id:4,
            name:'Chirag',
            desc:'I am chirag'
        },
        {
            id:5,
            name:'Raju',
            desc:'I am raju'
        }
    ]
    const personList = persons.map(person => <Title key={person.id} person={person}/>  ) // key : unique key prop // not acceceble in child component
  return (
    <div>
        {personList}
    </div>
  )
}

export default List