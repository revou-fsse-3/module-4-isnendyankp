import { InputHTMLAttributes } from "react"


type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = (props : InputProps) => {
  return (
    <input type="text" {...props} />
  )
}

export default Input

// Progress:
//  1. cr8 input component
//  2. Add type InputProps with InputHTMLAttributes<HTMLInputElement> from react
//  3. Add props with type InputProps to Input component and spread it to input element  