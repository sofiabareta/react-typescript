import style from './List.module.scss'
import Item from "./Item";
import { ITasks } from '../../types/task';

interface Props {
    tasks: ITasks[],
    selectTask: (selectedTask:ITasks) => void 
}

const List = ({ tasks, selectTask } : Props) => {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                { tasks.map( (task, index) => (
                    <Item 
                        selectTask={selectTask}    
                        key={index} 
                        {...task} 
                    /> 
                ))}
            </ul>
        </aside>
    )
}

export default List