import { useState } from 'react'
import { useEffect } from 'react'
import yellowBlob from '../assets/yblob.svg'
import blueBlob from '../assets/bblob.svg'
import './Start.css'

function Start(props) {
    return (
        <div className='box'>
            <div className="container">
                <img src={yellowBlob} alt="blob" className="yellow" />
                <h1>Quizzical</h1>
                <p>Some description if needed</p>
                <div className="start" onClick={props.handleStartClick}>Start quiz</div>
                <img src={blueBlob} alt="blob" className="blue" />
            </div>
        </div>
    )
}

export default Start
