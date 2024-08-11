import { useState } from "react"
import { useMemo } from "react"

const MemoExample = () => {
  const [inputValue,setInputValue] = useState(0);
  return (
    <div>
      <input type="text" value={inputValue} onChange={e => {
        setInputValue(Number(e.target.value))
      }}/>
      <ExpenseCalculation value={inputValue}/>
    </div>
  )
}

const ExpenseCalculation = ({value}) => {
  const expenseResult = useMemo(() => {
    console.log('Calculating expensive resulting...')
    return value*2;
  },[value])

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expenseResult}</p>
    </div>
  );
}

export default MemoExample;