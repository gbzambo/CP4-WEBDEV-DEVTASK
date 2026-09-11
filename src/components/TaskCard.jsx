const TaskCard = ({ tarefa, onConcluir, onRemover }) => {
  return (
    <div className="mb-4 rounded-lg border border-slate-700 bg-slate-800 p-4">
      <h3 className="text-lg font-bold text-white">
        {tarefa.nome}
      </h3>

      {tarefa.concluida && (
        <p className="text-green-400">
          Concluída
        </p>
      )}

      <p className="text-sm text-slate-300">
        Data: {tarefa.data}
      </p>

      <p className="text-sm text-blue-400">
        Prioridade: {tarefa.prioridade}
      </p>

      <p className="mt-2 text-slate-200">
        {tarefa.descricao}
      </p>

      <button
        onClick={() => onConcluir(tarefa.id)}
        className="mt-4 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-500"
      >
        Concluir
      </button>

      <button
        onClick={() => onRemover(tarefa.id)}
        className="ml-2 mt-4 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-500"
      >
        Remover
      </button>
    </div>
  )
}

export default TaskCard