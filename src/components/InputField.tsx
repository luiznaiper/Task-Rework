import { SetStateAction } from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField = ({ todo, setTodo }: Props) => {
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTodo(e.target.value)
  }
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={handleChange}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go!
      </button>
    </form>
  )
}

export default InputField
