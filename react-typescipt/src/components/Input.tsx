export default function InputComponent({ id, label,type, setValue, value, ...props}) {
  return (<>
    <label htmlFor={id}>
      {label}
    </label>

    <input 
      type={type}
      id={id}
      value={value}
      onChange={({target})=>setValue((prev)=>({...prev,[target.id]:target.value}))}
    />
  </>)
}