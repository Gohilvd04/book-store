import React from 'react'
import Title from './Title'
function List() {
    const persons = [
        {
            id:1,
            name:'Vishal',
            desc:'I am vishal'
        },
        {
            id:2,
            name:'Deep',
            desc:'I am Deep'
        },
        {
            id:4,
            name:'Krinsi',
            desc:'I am Krinsi'
        },
        {
            id:3,
            name:'Ankit',
            desc:'I am ankit'
        },
        {
            id:5,
            name:'Raju',
            desc:'I am Raju'
        },
        {
            id:6,
            name:'Chirag',
            desc:'I am Chirag'
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