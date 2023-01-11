interface ButtonProps {
  text: string
  onClick?: () => void
  customClass?: string
  isSubmit?: boolean
}
const Button = ({ text, onClick, customClass, isSubmit }: ButtonProps) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className={customClass ?? 'rounded bg-purple-500 border-l-pink-500 p-3'}
    >
      {text}
    </button>
  )
}

export default Button
