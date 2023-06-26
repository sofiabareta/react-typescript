import { ITasks } from '../../../types/task'
import style from '../List.module.scss'

interface Props extends ITasks {
    selectTask: (selectedTask:ITasks) => void 
}

const Item = ({ title, duration, selected, completed, id, selectTask }: Props) => {
    return (
        <li 
            className={`${style.item} ${selected && style.itemSelecionado} ${completed && style.itemCompletado}`} 
            onClick={() => !completed && selectTask({
                title,
                duration, 
                selected,
                completed,
                id
            })
        }>
            <h3>{title}</h3>
            <span>{duration}</span>
            {completed && <span className={style.concluido} aria-label='Tarefa concluída'></span>}
        </li>
    )
}

export default Item
