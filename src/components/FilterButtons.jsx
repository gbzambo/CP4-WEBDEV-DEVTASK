const FilterButtons = ({ filtro, onFiltroChange }) => {
  return (
    <div className="mx-auto mt-6 flex max-w-2xl gap-2">
      <button
        onClick={() => onFiltroChange("todas")}
        className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-600"
      >
        Todas
      </button>

      <button
        onClick={() => onFiltroChange("pendentes")}
        className="rounded-lg bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-600"
      >
        Pendentes
      </button>

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