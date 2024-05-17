import React, { useEffect, useState } from 'react'

export default function PlayGround():JSX.Element {
    const [numberOfDogs, setNumberOfDogs] = useState<number>(0)
    const [numberOfBirds, setNumberOfBirds] = useState<number>(0)

    function handleAddDog():void{
        setNumberOfDogs(numberOfDogs + 1)
    }
    function handleAddBird():void{
        setNumberOfBirds(numberOfBirds + 1)
    }
    //Component lifecicle - жизненный цикл компонента
    //Этапы
    //1. Монтирование - первая отрисовка на странице
    //Обновление
    //Размонтирование - когда перестает работать отрисовка

    //useEffect
    //Позволяет вызвать функцию
    //На каком-то этапе жизни компонента
    // - принимает колбек функцию и второй опциональный параметр - массив зависимостей

    //Пустой пример

    useEffect(() =>{
        console.log("useEffect 1 - Только при первой отрисовке");
    },[])
    //Пример 2 - без массива вообще
    useEffect(() =>{
        console.log("useEffect 2 - при маунте и при любых изменениях");
    })
    //Пример 3 - с указанием зависимостей    
    useEffect(() =>{
        console.log("useEffect 3 - прии первичной отрисовке и при имзменении numberOfDogs");        
    },[numberOfDogs])

    return (
    <div>
        <h1>PlayGround</h1>
        <p>Number of Dogs: {numberOfDogs}</p>
        <p>Number of Birds: {numberOfBirds}</p>
        <button type='button' onClick={handleAddDog}>Let the Dog in</button>
        <button type='button' onClick={handleAddBird}>New Bird</button>
    </div>
  )
}
