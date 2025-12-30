import React from 'react'
import { useState } from 'react'

const App = () => {


  const [Task, setTask] = useState('')
  const [Desc, setDesc] = useState('')
  const [Maintask, setMaintask] = useState([])

  const submitHandler = (e)=>{
     e.preventDefault()

     setMaintask([...Maintask, {Task, Desc}])
     setTask('')
     setDesc('')
     console.log(Maintask)

  }


  const deletehandler = (i)=>{
      const copytask = [...Maintask]
      copytask.splice(i, 1)
      setMaintask(copytask)
  }

  let render = <h1>No task Available</h1>



    
  if(Maintask.length>0){
    render = Maintask.map((t, i)=>{
    return (
      <li key= {i} className='flex items-center justify-between'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
           <h5 className='text-2xl font-semibold'>{t.Task}</h5>
           <h6 className='text-2xl font-semibold' >{t.Desc}</h6>
        </div>
        <button 
        onClick={(i)=>{
          deletehandler(i)
        }}
        className='bg-red-600 text-white rounded-xl px-2 py-2 hover:scale-95'>Delete</button>
      </li>
    )
  })
  }

  return (
    <>
    <h1 className='bg-black p-5 text-white font-bold text-center text-2xl'>Mukesh Todo List</h1>
    <form  className=''
    onSubmit={(e)=>{
         submitHandler(e)
    }}
    >
     <input
       value = {Task}
       onChange={(e)=>{
            setTask(e.target.value)
       }}

      className='border-4 px-4 py-2 m-8 text-2xl border-zinc-800' type='text' placeholder="Enter your task"/>
     <input 
     value = {Desc}
     onChange={(e)=>{
      setDesc(e.target.value)
     }}
     className='border-4 px-4 py-2 m-8 text-2xl border-zinc-800' type='text' placeholder="Enter your Decription"/>
     <button className='bg-black text-white p-3 text-2xl  font-bold rounded-xl'>Add Task</button>

    </form>
       
      <hr/>
      <div className='p-8 bg-cyan-700 text-white font-bold'>
        <ul >{render}</ul>
      </div>
    </>
  )
}

export default App
