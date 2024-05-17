//создали переменную состояния counter
    //и функцию setCounter для изменения этой переменной
    //useState - хук для работы с состояниями
    //в круглых скобках начальное состояние переменной состояния
    //хук принимает начальное значение переменной состояния
    //возвращает массив в котором на первом месте переменная состояния
    //а на втором функция сеттер
    //хук это функция которая используется внутри компонента
    //В жизненном цикле компонента React есть 3 фазы
    //1 фаза - это сборка(mounting)
    //2 фаза - это (updating)
    //3 фаза - это (unmounting)
import React, {useState} from 'react' 
import style from './Counter.module.css'

export default function Counter():JSX.Element {
    const [counter, setCounter] = useState<number>(0)
    
  function handlePlus ():void{
    setCounter(counter + 1)
  }
  function handleMinus ():void{
    setCounter(counter - 1)
  }
  
    return (
      <>
      <h1>Добавление денег</h1>
      <img 
      src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" 
      alt="money" />
      <div className={style.container}>
        <button type='button' className={style.btn} onClick={handleMinus}>Убрать лишние деньги</button>
        <span style={{color:'red'}}>{counter}$</span>
        <button type='button' className={style.btn} onClick={handlePlus}>Добавить деньги</button>
        {/* <span style={{color:'green'}}>{counter}</span> */}
      </div>
      </>
    
  )
}

