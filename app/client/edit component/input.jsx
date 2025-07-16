export default function InputComponent({value, onChangeValue, ref}){
    return (
        <div className="inputComponen">
            <input
            type="text"
            ref={ref}
            value={value}
            onChange={(e)=>onChangeValue(e.target.value)}/>
        </div>
    )
}