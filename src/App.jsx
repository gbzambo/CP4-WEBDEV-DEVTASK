import React from 'react'
import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"  
const App = () => {
  const [tarefas, setTarefas] = useState([])
  const adicionarTarefa = (novaTarefa) => {
setTarefas([...tarefas, novaTarefa])
}
  return (
    <div>
      <TaskForm onAdicionarTarefa={adicionarTarefa} />
      <TaskList tarefas={tarefas} />
    </div>
  )
}

export default App
