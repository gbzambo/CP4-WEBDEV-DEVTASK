const TaskCard = ({ tarefa }) => {
  return (
    <div className="mb-4 rounded-lg border border-slate-700 bg-slate-800 p-4">
      <h3 className="text-lg font-bold text-white">
        {tarefa.nome}
      </h3>

      <p className="text-sm text-slate-300">
        Data: {tarefa.data}
      </p>

      <p className="text-sm text-blue-400">
        Prioridade: {tarefa.prioridade}
      </p>

      <p className="mt-2 text-slate-200">
        {tarefa.descricao}
      </p>
    </div>
  )
}

export default TaskCard