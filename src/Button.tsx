import { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonVariants {
  text: string;
  disable?: boolean;
  variant?: string;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

const Button = ({ variant, text, disable, ...props }: ButtonProps) => {
  return (
    <button {...props} className={variant ?? 'button-red'} disabled={disable}>
      {text}
    </button>
  );
};

export default Button;
