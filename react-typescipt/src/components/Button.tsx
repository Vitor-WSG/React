import React from "react";

//Neste caso eu preciso passar todos os atributos
type ButttonProps = [
  children: React.ReactNode,
  tamanho?: string,
  color?: string,
  onClick?: () => void,
];
// const Button = (props: ButtonProps) => {
//   return (
//     <div>
//       <button onClick={props.onClick} style={{ fontSize: props.tamanho, backgroundColor: props.color }}>
//         {props.children}
//       </button>
//     </div>
//   );
// };

//Neste caso eu nao preciso criar o atributo de children, ja vem pelo React.PropsWithChildren
type ButtonProps2 = React.PropsWithChildren<[
  onClick?: () => void,
  tamanho?: string,
  color?: string
]>

// const Button = (props: ButtonProps2) => {
//   return (
//     <div>
//       <button onClick={props.onClick} style={{ fontSize: props.tamanho, backgroundColor: props.color }}>
//         {props.children}
//       </button>
//     </div>
//   );
// };

//Com o React.ComponentProps<'tag'>, podemos informar que tipo de propriedades aquele componente deve ter.
type ButtonProps3 = React.ComponentProps<'button'> & {
  tamanho?: string
}
const Button = ({tamanho,children,color,onClick, ...props}:ButtonProps3) => {
  return (
    <div>
      <button onClick={onClick} style={{ fontSize: tamanho, backgroundColor: color }} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
