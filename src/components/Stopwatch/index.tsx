import Button from "../Button"
import Watch from "./Watch"
import { ITasks } from "../../types/task"
import { useEffect, useState } from "react"
import { toSeconds } from "../../common/utils/time"
const style = require( './Stopwatch.module.scss')

interface Props { 
    selected: ITasks | undefined,
    completeTask: () => void
}

const Stopwatch = ({ selected, completeTask } : Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.duration)
            setTime(toSeconds(selected.duration))
    }, [selected])

    const countDown = (counter: number = 0) => {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter--)
                return countDown(counter--)
            }
            completeTask()
        }, 1000)

    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => countDown(time)} type={"button"}>Começar</Button>
        </div>
    )
}

export default Stopwatch