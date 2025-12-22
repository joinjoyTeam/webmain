import BoatCard from './BoatCard'
import FourIslandsCard from './FourIslandsCard'

export default function FleetSection({ title = 'Recommended trips', subtitle }) {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 28 }}>{title}</h2>
      {subtitle && (
        <p style={{ color: '#64748b', marginBottom: 16 }}>
          {subtitle}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <BoatCard />
        <FourIslandsCard />
      </div>
    </section>
  )
}
