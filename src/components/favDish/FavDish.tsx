import React, { useState } from "react";
import style from "./FavDish.module.css";

export default function FavDish(): JSX.Element {
    const [dish, setDish] = useState<string>("");

    function handleAddDough(): void {
        setDish(prevDish => `${prevDish} dough 🫓`);
    }
    
    function handleAddBread(): void {
        setDish(prevDish => `${prevDish} bread 🍞`);
    }
    
    function handleAddRedSauce(): void {
        setDish(prevDish => `${prevDish} red sauce 🩸`);
    }
    
    function handleAddWhiteSauce(): void {
        setDish(prevDish => `${prevDish} white sauce ⚪`);
    }
    
    function handleAddCheese(): void {
        setDish(prevDish => `${prevDish} cheese 🧀`);
    }
    
    function handleAddTomato(): void {
        setDish(prevDish => `${prevDish} tomato 🍅`);
    }
    
    function handleAddPeper(): void {
        setDish(prevDish => `${prevDish} peper 🥒`);
    }
    
    function handleAddMeat(): void {
        setDish(prevDish => `${prevDish} meat 🥩`);
    }
    
    function handleAddPeperoni(): void {
        setDish(prevDish => `${prevDish} peperoni 🥓`);
    }
    
    function handleAddClear(): void {
        setDish("");
    }

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <h2>Favorite Dish</h2>
                <img src="https://prod-wolt-venue-images-cdn.wolt.com/624c2d411e6f82dbff75186b/85b556de-c090-11ec-b415-86e465e9c7ca_closeup_2_citypizza.jpg" alt="pizza" />
            </div>
            <div className={style.recipesContainer}>
                <h2>Recipes</h2>
                <div className={style.recipes}>
                    <p className={style.margarita}>Pizza Margarita: Add dough 🫓, Add red sauce 🩸, Add cheese 🧀</p>
                    <p className={style.peperoni}>Pizza Peperoni: Add dough 🫓, Add red sauce 🩸, Add cheese 🧀, Add peperoni 🥓</p>
                    <p className={style.fourCheese}>Pizza Four Cheese: Add dough 🫓, Add white sauce ⚪, Add cheese 🧀, Add cheese 🧀, Add cheese 🧀</p>
                    <p className={style.burger}>Burger classic: Add bread 🍞, Add red sauce 🩸, Add meat 🥩</p>
                </div>
            </div>
            <div className={style.btnContainer}>
                <div className={style.base}>Base of the Dish:
                    <button type="button" className={style.btn} onClick={handleAddDough}>Add dough 🫓</button>
                    <button type="button" className={style.btn} onClick={handleAddBread}>Add bread 🍞</button>
                </div>
                <div className={style.ingredients}>Ingredients of the Dish:
                    <button type="button" className={style.btn} onClick={handleAddRedSauce}>Add red sauce 🩸</button>
                    <button type="button" className={style.btn} onClick={handleAddWhiteSauce}>Add white sauce ⚪</button>
                    <button type="button" className={style.btn} onClick={handleAddCheese}>Add cheese 🧀</button>
                    <button type="button" className={style.btn} onClick={handleAddTomato}>Add tomato 🍅</button>
                    <button type="button" className={style.btn} onClick={handleAddPeper}>Add pepper 🥒</button>
                    <button type="button" className={style.btn} onClick={handleAddMeat}>Add meat 🥩</button>
                    <button type="button" className={style.btn} onClick={handleAddPeperoni}>Add pepperoni 🥓</button>
                </div>
                <button type="button" className={style.btn} onClick={handleAddClear}>Clear</button>
            </div>
        </div>
    );
}