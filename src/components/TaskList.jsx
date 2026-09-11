import TaskCard from "./TaskCard"

const TaskList = ({ tarefas, onConcluir, onRemover, filtro}) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => {
  if (filtro === "pendentes") {
    return !tarefa.concluida
  }

  if (filtro === "concluidas") {
    return tarefa.concluida
  }

  return true
})
  return (
    <div className="mx-auto mt-6 max-w-2xl">
      <h2 className="mb-4 text-xl font-bold text-white">
        Tarefas
      </h2>

      {tarefasFiltradas.map((tarefa) => (
        <TaskCard
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={onConcluir}
          onRemover={onRemover}
        />
      ))}
    </div>
  )
}

export default TaskList