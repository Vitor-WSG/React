type VendasInput = React.ComponentProps<"input"> & {
  label: string,
  setState: React.Dispatch<React.SetStateAction<string>>
}

export default function InputVendas({ label,setState, ...props }:VendasInput) {
  return (<>
    <label htmlFor={label}>{label}</label>
    <input type={props.type} name={label} id={label} value={props.value} onChange={({ currentTarget }) => setState(currentTarget.value)} {...props}/>
  </>)
}