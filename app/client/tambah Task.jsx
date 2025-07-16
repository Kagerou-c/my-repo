import { handleClientScriptLoad } from "next/script";

export default function TambahTaskComponen({onChangeValue, value, onHandleClick}){
    return(
        <>
            <input
            type="text"
            placeholder="masukan tugas"
            value={value}
            onChange={(e)=>onChangeValue(e.target.value)}/>

            <button onClick={onHandleClick} disabled={!value}>add task</button>
        </>
    )
}