import React, { useState, useEffect } from 'react';
import style from './Activity.module.css';

export default function Activity(): JSX.Element {
    const [activity, setActivity] = useState<string>('');
    const [typeActivity, setTypeActivity] = useState<string>('');

    async function loadActivity(): Promise<void> {
        try {
            const res = await fetch("https://www.boredapi.com/api/activity");
            const obj = await res.json();
            const { activity: activityName, type } = obj;
            setActivity(activityName);
            setTypeActivity(type);
        } catch (error) {
            console.error("Error loading activity:", error);
        }
    }

    useEffect(() => {
        loadActivity();
    }, []);

    return (
        <div className={style.container}>
            <h1>Activity: {activity}</h1>
            <h2>Type: {typeActivity}</h2>
            <button className={style.btn} onClick={loadActivity}>Next Activity</button>
        </div>
    );
}