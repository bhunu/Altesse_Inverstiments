const DATA = [
  { number: '5', label: 'Industry Verticals' },
  { number: '3', label: 'African Markets' },
  { number: 'ESG', label: 'Governance Standard' },
  { number: '∞', label: 'Growth Potential' },
]

export default function Stats() {
  return (
    <div className="stats-strip" aria-label="Key figures">
      <div className="container">
        <div className="stats-inner">
          {DATA.map(({ number, label }) => (
            <div className="stat-item reveal" key={label}>
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
