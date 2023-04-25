import {AiOutlinePlusCircle} from "react-icons/ai";

import Logo from "../../assets/Logo.svg"
import styles from "./Heder.module.css"
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
    onAddTask: (taslTitle: string) => void;
}
export function Header({onAddTask} : HeaderProps) {
    const [title,setTitle] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title)
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={Logo}/>

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                placeholder="Adicione uma nova tarefa" 
                onChange={onChangeTitle} 
                value={title}/>
                <button>
                        Criar
                        <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}