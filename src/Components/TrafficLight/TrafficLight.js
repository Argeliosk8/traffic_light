import React, {useState} from "react";
import styles from "./trafficlight.module.css"


function TrafficLight(){
    const [light1, setLight1] = useState()
    const [light2, setLight2] = useState()
    const [light3, setLight3] = useState()

    function clickHandler(event){
        const id = event.target.id
        if(id === "red"){
            if(light1 === styles.red){
                setLight1()
            } else {
                setLight1(styles[id])
                setLight2()
                setLight3()
            }
        }

        if (id === "yellow"){
            if(light2 === styles.yellow){
                setLight2()
            } else {
                setLight2(styles[id])
                setLight1()
                setLight3()
            }
        }

        if (id === "green"){
            if(light3 === styles.green){
                setLight3()
            } else {
                setLight3(styles[id])
                setLight2()
                setLight1()
            }
        }
    }

    return (
        <div className={styles.mainDiv}>
            <div className={light1} onClick={clickHandler} id="red"></div>
            <div className={light2} onClick={clickHandler} id="yellow"></div>
            <div className={light3} onClick={clickHandler} id="green"></div>
        </div>
    )
}

export default TrafficLight;