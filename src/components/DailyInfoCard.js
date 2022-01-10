import React from 'react'
import '../Style/dailyInfoCard.css';
import data from '../data/dailyCard.json'

export default function DailyInfoCard() {
    return (
        <div className="dailyCard">
            {data.map(item => {
                return <div>
                    <span className=''>{item.time}</span>
                    <div>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
