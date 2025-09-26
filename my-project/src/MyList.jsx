import { useState } from "react";

export default function MyList() {
    const [Tasks , setTasks] = useState([]);
    const [InputOfTask , setInputOfTask] = useState("");
    const [ID, setID] = useState(0);

    const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
};


    const TaskList = Tasks.map((task) =>{
        return(
            <li key={task.id}>{task.name} <button
            style={{ ...buttonStyle, backgroundColor: "red" }}
             onClick={(event) => {
                handleDelete(task.id)
            }
            }
            >Delete</button>

             <button style={{ ...buttonStyle, backgroundColor: "green" }} 
             onClick={(event) => {
                handleEdit(task.id)
             }}
             >Edit
             </button></li>
        );
    }
    )
    function handleClick(){
        if(InputOfTask.trim() === "") {
            alert("please add text");
            return;
        };
        setTasks([...Tasks , {id:ID , name:InputOfTask}]);
        setID(ID+1);
        setInputOfTask("");
    

  }

  function handleTask(event){
    setInputOfTask(event.target.value);
  }

  function handleDelete(id){
    const NewList = Tasks.filter((Tasks) =>{
        return Tasks.id !== id ;
    }
    );
    setTasks(NewList);

  }
  function handleEdit(id){
    // const NewList = Tasks.map((Tasks) =>{
    //     if(Tasks.id === id){
    //         return <input  value={Tasks.name}/>
    //     }
    // })
  }


  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        background:"#003B73",
        color:"#BFD7ED"
      }}
    >
      <label
        style={{
          fontSize: "clamp(2rem, 5vw, 6rem)",
          fontWeight: "bold",
          display: "block",
          marginBottom: "10px",
        }}
      >
        To-Do List
      </label>

      <div>
        <input
          value={InputOfTask}
          onChange={handleTask}
          type="text"
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button
        onClick={handleClick}
        style={{
            padding: "10px 20px",
            backgroundColor: "#4f46e5",   
            color: "white",               
            border: "none",              
            borderRadius: "8px",          
            cursor: "pointer",            
            fontWeight: "bold",           
            transition: "background-color 0.3s", 
  }}
  onMouseEnter={e => e.target.style.backgroundColor = "#4338ca"} 
  onMouseLeave={e => e.target.style.backgroundColor = "#4f46e5"} 
>
        New Task
        </button>

      </div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
        {TaskList}
        </ul>
    </div>
  );


}
