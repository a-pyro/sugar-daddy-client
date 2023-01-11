interface ButtonProps {
  text: string
  onClick: () => void
  customClass?: string
}
const Button = ({ text, onClick, customClass }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={customClass ?? 'rounded bg-purple-500 border-l-pink-500 p-3'}
    >
      {text}
    </button>
  )
}

export default Button
