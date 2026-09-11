import TaskCard from "./TaskCard"

const TaskList = ({ tarefas, onConcluir, onRemover}) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl">
      <h2 className="mb-4 text-xl font-bold text-white">
        Tarefas
      </h2>

      {tarefas.map((tarefa) => (
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