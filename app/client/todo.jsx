'use client';
import { useState, useRef, useEffect } from "react";

export default function LogicTodo(){

    //usestate untuk menampung, membuat task dan data task yg selesai
    const[task, setTask]=useState([{
        id : 1, tugas : 'buka fesnuk', selesai : false
    }])

    const[input, setInput] = useState("")

    const [taskComplete, setTaskComplete] = useState(0)
    
    //usestate untuk edit task
    const[edit, setEdit] =useState(false)
    const [editInput, setEditINput] = useState("")
    const [id, setID]= useState(0)
    const [index, setIndex] = useState(0)

    const ref=useRef([])

    //untuk fokus ke elemen input
     

    useEffect(()=>{
        if(edit && ref.current){

            const currentinput = ref.current[index]
            currentinput.focus()
           console.log(currentinput)
            
        }
    })
    
    //fungsi menamahkan task
    const handlerClick = (value)=>{
        
        const pengecek = task.find((item)=>
          item.tugas==input)
            
            if(pengecek){
                console.log('task sudah ada dan blm dikerjakan')
                return
            }
            
                else{
                setTask(() => [...task, {
                    id : Date.now() + Math.random(), tugas : input, selesai : false
                }])
            }
           
            setInput("")
        

    }


    //fungsi menghaspus atau menyelesaikan task
    const handlerTask = (id, type)=>{

        if(type==="submit"){
            const LetsCek = task.filter((item)=>item.id!==id)
            setTask(LetsCek)
            setTaskComplete(+1)
           
            // setTask(prev=>prev.map((item)=> item.id===id? {...item, selesai : !item.selesai} : item) )
            // console.log(task) 
        }
        else if (type==="delete"){
            const LetsCek = task.filter((item)=>item.id!==id)
            setTask(LetsCek)
        }
        //console.log(task)
        // console.log(task.selesai)
        // console.log(id)
        // console.log(taskCompleate)
}


    // fungsi untuk pindah ke edit display
    const editTask = (id, index)=>{
        setID(id)
        const cariId = task.find((item)=>item.id===id)
        setEditINput(cariId.tugas)
        setEdit(true)
        setIndex(index)
         console.log(index)
    }

    
    //fungsi untuk edit task
    const handlerEdit = (id, type)=>{
        if(type==="selesai"){
        setTask(prev => prev.map((item)=> item.id===id? {...item, tugas :editInput}:item))
        setEdit(false)
        setEditINput("")
        setID(0)}

        else if (type==="batal"){
            setEdit(false)
            setEditINput("")
            setID(0)
        }
    }
  
    return(
        <div
        className="todo">

            <h1> Todo List 📝</h1>

            <div
            className = "task-input">
        <input 
        type="text"
        placeholder="masukan tugas"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={handlerClick} disabled={!input}>add task</button>
        </div>


        <p>task complete : {taskComplete}</p>

        <div className="task">
            {task.map((item, index)=>
            <li
            key = {item.id}
            style={{ display: item.selesai ? 'none' : 'block' }}>
               


               
                 {edit && id===item.id?
        <div
        className="edit-task">
             <input 
        type="text"
        ref={(el)=>ref.current[index] = el}
        placeholder="masukan tugas"
        value={editInput}
        onChange={(e)=>setEditINput(e.target.value)}
        />
        <button onClick={()=>handlerEdit(item.id, "selesai")}>selesai ✅</button>

        <button onClick={()=>handlerEdit(item.id, "batal")}>batal ❌</button>

        </div> : 

        <div
        className="task-item">

        <span>{item.tugas}</span>

        <button onClick={()=>handlerTask(item.id, "submit")}>✅submit</button>

        <button onClick={()=>handlerTask(item.id,"delete")}>❌delete</button>

        <button onClick={()=>editTask(item.id, index)}>✏️edit</button>
        </div>
        } 




                </li>
        )}</div>

        
        </div>
    )
}