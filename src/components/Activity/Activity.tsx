import React, { useState, useEffect } from 'react';
import style from './Activity.module.css';

export default function Activity(): JSX.Element {
    const [activity, setActivity] = useState<string>('');
    const [typeActivity, setTypeActivity] = useState<string>('');
    const [participantCount, setParticipantCount] = useState<number>(1);

    async function loadActivity(): Promise<void> {
        try {
            const res = await fetch("https://www.boredapi.com/api/activity");
            const obj = await res.json();
            const { activity, type, participants } = obj;
            setActivity(activity);
            setTypeActivity(type);
            setParticipantCount(participants);
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
            <h2>Participants: {participantCount}</h2>
            <button className={style.btn} onClick={loadActivity}>Next Activity</button>
        </div>
    );
}