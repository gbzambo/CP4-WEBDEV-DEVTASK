  import React from 'react'
  import { useState } from "react"
  import TaskForm from "./components/TaskForm"
  import TaskList from "./components/TaskList"  
  const App = () => {
    const [tarefas, setTarefas] = useState([])
    const concluirTarefa = (id) => {
    setTarefas(
    
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: true }
          : tarefa
      )
    )
  }
  const removerTarefa = (id) => {
  setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
}
    const adicionarTarefa = (novaTarefa) => {
  setTarefas([...tarefas, novaTarefa])
  }
    return (
      <div>
        <TaskForm onAdicionarTarefa={adicionarTarefa} />
        <TaskList
          tarefas={tarefas}
           onConcluir={concluirTarefa}
          onRemover={removerTarefa}
        />
      </div>
    )
  }

  export default App
