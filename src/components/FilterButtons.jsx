const FilterButtons = ({ filtro, onFiltroChange }) => {
  return (
    <div className="mx-auto mt-6 flex max-w-2xl gap-2">

      {/* Callback usado para selecionar o filtro "Todas" */}
      <button
        onClick={() => onFiltroChange("todas")}
        className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-600"
      >
        Todas
      </button>

      {/* Callback usado para selecionar o filtro "Pendentes" */}
      <button
        onClick={() => onFiltroChange("pendentes")}
        className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-600"
      >
        Pendentes
      </button>

      {/* Callback usado para selecionar o filtro "Concluídas" */}
      <button
        onClick={() => onFiltroChange("concluidas")}
        className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-600"
      >
        Concluídas
      </button>

    </div>
  )
}

export default FilterButtons