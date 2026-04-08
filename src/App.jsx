import { useState } from "react"
import useFetch from "./hooks/useFetch"
import CountryCard from "./components/CountryCard"

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [continente, setContinente] = useState("")

  const url = busqueda
    ? `https://restcountries.com/v3.1/name/${busqueda}`
    : `https://restcountries.com/v3.1/all`

  const { data, loading, error } = useFetch(url)

  const paises = data
    ? continente
      ? data.filter(p => p.region === continente)
      : data
    : []

  return (
    <div className="contenedor">
      <h1>🌍 Explorador de Países</h1>

      <div className="controles">
        <input
          type="text"
          placeholder="🔍 Buscar país..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <select
          value={continente}
          onChange={e => setContinente(e.target.value)}
        >
          <option value="">🌐 Todos los continentes</option>
          <option value="Africa">🌍 África</option>
          <option value="Americas">🌎 América</option>
          <option value="Asia">🌏 Asia</option>
          <option value="Europe">🏰 Europa</option>
          <option value="Oceania">🏝️ Oceanía</option>
        </select>
      </div>

      {loading && <p className="cargando">⏳ Cargando países...</p>}
      {error && <p className="error">❌ {error}</p>}

      <div className="tarjetas">
        {paises.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default App