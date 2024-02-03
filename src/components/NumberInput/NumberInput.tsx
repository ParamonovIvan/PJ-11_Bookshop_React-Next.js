import styles from './NumberInput.module.scss'
import MinusIcon from '../../../assets/images/icons/minus.svg'
import PlusIcon from '../../../assets/images/icons/plus.svg'
import Image from 'next/image'

type NumberInputProps = {
  value: number,
  handleChange: (value: number) => void
}

const NumberInput = (props: NumberInputProps) => {
  const {value, handleChange} = props;
  const handlePlus = () => {
    handleChange(value + 1)
  }

  const handleMinus = () => {
    handleChange(value - 1)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(Number(e.target.value))
  }

  return (
    <div className={styles.number__input}>
      <button onClick={handleMinus}><Image src={MinusIcon} alt={"-"} fill={true}/></button>
      <input type={"number"} value={value} onInput={handleInput}/>
      <button onClick={handlePlus}><Image src={PlusIcon} alt={"+"} fill={true}/></button>
    </div>
  )
}

export default NumberInput
