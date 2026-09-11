import React from 'react'
import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import FilterButtons from "./components/FilterButtons"

const App = () => {
  const [tarefas, setTarefas] = useState([])
  const [filtro, setFiltro] = useState("todas")
  const [carregouTarefas, setCarregouTarefas] = useState(false)

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas")

    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas))
    }

    setCarregouTarefas(true)
  }, [])

  useEffect(() => {
    if (carregouTarefas) {
      localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }
  }, [tarefas, carregouTarefas])

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
    setTarefas(
      tarefas.filter((tarefa) => tarefa.id !== id)
    )
  }

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa])
  }

  const alterarFiltro = (novoFiltro) => {
    setFiltro(novoFiltro)
  }

  return (
    <div>
      <TaskForm onAdicionarTarefa={adicionarTarefa} />

      <FilterButtons
        filtro={filtro}
        onFiltroChange={alterarFiltro}
      />

      <TaskList
        tarefas={tarefas}
        onConcluir={concluirTarefa}
        onRemover={removerTarefa}
        filtro={filtro}
      />
    </div>
  )
}

export default App