import React, { useState } from "react";
import Button from "../Button";
import { ITasks } from "../../types/task";
import { v4 as uuidv4 } from 'uuid'; 
const style = require('./Form.module.scss')

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

const Form = ({ setTasks }: Props) => {
    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("00:00")

    const adicionarTarefa = (event: React.FormEvent<HTMLFormElement>) => {
        debugger
        event.preventDefault()
 
        setTasks(oldTasks => 
        [
            ...oldTasks,
            {
                title,
                duration,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])
        setTitle("")
        setDuration("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <fieldset className={style.inputContainer}>
                <label htmlFor="tarefa">Tarefa</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você quer estudar?" 
                    value={title} 
                    onChange={event => setTitle(event.target.value)} 
                    required 
                />
            </fieldset>
            <fieldset className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time" 
                    name="tempo" 
                    id="tempo" 
                    step="1" 
                    min="00:00:00" 
                    max="01:30:00" 
                    value={duration} 
                    onChange={event => setDuration(event.target.value)} 
                    required 
                />
            </fieldset>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Form