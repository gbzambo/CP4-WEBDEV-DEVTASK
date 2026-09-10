const TaskList = ({ tarefas }) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl">
      <h2 className="mb-4 text-xl font-bold text-white">
        Tarefas
      </h2>

      {tarefas.map((tarefa) => (
        <div
          key={tarefa.id}
          className="mb-4 rounded-lg border border-slate-700 bg-slate-800 p-4"
        >
          <h3 className="text-lg font-bold text-white">
            {tarefa.nome}
          </h3>

          <p className="text-sm text-slate-300">
            {tarefa.data}
          </p>

          <p className="text-sm text-blue-400">
            {tarefa.prioridade}
          </p>

          <p className="mt-2 text-slate-200">
            {tarefa.descricao}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskList