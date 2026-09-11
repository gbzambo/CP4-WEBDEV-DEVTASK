import React from 'react'
import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import FilterButtons from "./components/FilterButtons"

const App = () => {
  // Hooks usados para controlar as tarefas, o filtro e o carregamento dos dados
  const [tarefas, setTarefas] = useState([])
  const [filtro, setFiltro] = useState("todas")
  const [carregouTarefas, setCarregouTarefas] = useState(false)
  
  // Hook usado para carregar as tarefas salvas no localStorage
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas")

    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas))
    }

    setCarregouTarefas(true)
  }, [])

  // Hook usado para salvar as tarefas sempre que o estado for alterado
  useEffect(() => {
    if (carregouTarefas) {
      localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }
  }, [tarefas, carregouTarefas])

  const concluirTarefa = (id) => {
    // map() percorre as tarefas e cria um novo array,
    // alterando somente a tarefa que corresponde ao id recebido
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: true }
          : tarefa
      )
    )
  }

  const removerTarefa = (id) => {
    // filter() cria um novo array mantendo apenas
    // as tarefas cujo id seja diferente do id recebido
    setTarefas(
      tarefas.filter((tarefa) => tarefa.id !== id)
    )
  }

  const adicionarTarefa = (novaTarefa) => {
    // Callback recebido pelo TaskForm para adicionar uma nova tarefa
    setTarefas([...tarefas, novaTarefa])
  }

  const alterarFiltro = (novoFiltro) => {
    // Callback usado para atualizar o filtro selecionado
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