export default function ButtonEditComponent({onHandler}){
    return(
        <div className="button-edit">
            <button onClick={()=>onHandler("selesai")}>selesai✅</button>
            <button onClick={()=>onHandler("batal")}>batal ❌</button>
        </div>
    )
}