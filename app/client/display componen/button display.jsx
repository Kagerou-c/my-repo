export default function DisplayButtonComponen({onHandler, onEdit}){
    return(
        <div className="button">
            <button onClick={()=>onHandler('submit')}>✅submit</button>
            <button onClick={()=>onHandler("delete")}>❌delete</button>
            <button onClick={()=>onEdit("edit")}>✏️edit</button>
        </div>
    )
}