function CountryCard({ country }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "200px",
      textAlign: "center",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={country.flags.png}
        alt={country.name.common}
        style={{ width: "100px" }}
      />
      <h3>{country.name.common}</h3>
      <p>🏙️ Capital: {country.capital?.[0] || "N/A"}</p>
      <p>👥 Población: {country.population.toLocaleString()}</p>
      <p>🌍 Continente: {country.region}</p>
    </div>
  )
}

export default CountryCard