import { useState } from "react"

const TaskForm = ({ onAdicionarTarefa }) => {
  // Hook usado para controlar os valores preenchidos no formulário
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [prioridade, setPrioridade] = useState("Baixa")
  const [descricao, setDescricao] = useState("")

  // Callback executado quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede o navegador de recarregar a página ao enviar o formulário
    event.preventDefault()

    const novaTarefa = {
      id: Date.now(),
      nome: nome,
      data: data,
      prioridade: prioridade,
      descricao: descricao,
      concluida: false
    }

    // Callback recebido através das props para enviar
    // a nova tarefa para o componente App
    onAdicionarTarefa(novaTarefa)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg"
    >

      <h2 className="mb-6 text-2xl font-bold text-white">
        Nova tarefa
      </h2>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-white">
          Nome da tarefa
        </label>

        <input
          type="text"
          placeholder="Digite o nome da tarefa"
          onChange={(event) => setNome(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-white">
          Data
        </label>

        <input
          type="date"
          onChange={(event) => setData(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-white">
          Prioridade
        </label>

        <select
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          onChange={(event) => setPrioridade(event.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-white">
          Descrição
        </label>

        <textarea
          placeholder="Descreva a tarefa"
          onChange={(event) => setDescricao(event.target.value)}
          rows="4"
          className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        Adicionar tarefa
      </button>
    </form>
  )
}

export default TaskForm