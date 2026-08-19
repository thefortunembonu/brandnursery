import React, { ButtonHTMLAttributes } from 'react'
import { FaSpinner } from 'react-icons/fa';


type  ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant : "primary" | "secondary" | "secondaryblue" | "primaryblue" | "disabled";
    loading? : boolean;}

const styles = {
  primary:
    "bg-secondary text-white hover:bg-secondary/80 hover:text-gray-900",
  secondary:
    "border border-secondary text-secondary hover:bg-secondary hover:text-gray-900",
    secondaryblue:
    "border border-primary text-primary hover:bg-primary hover:text-white",
     primaryblue:
    " bg-primary text-gray-100 hover:bg-primary/80",
    disabled: 
    "bg-gray-400 text-gray"
};

const Button = ({variant, className='', loading, children, ...otherProps}: ButtonProps) => {
  return (
    <button {...otherProps} className={`${styles[variant]}   px-6 text-[14px] py-3  rounded-lg font-medium hover:scale-102 transition cursor-pointer`}>{loading ?  <FaSpinner className='animate-spin mx-auto text-xl'/>: children}
    </button>
  )
}

export default Button