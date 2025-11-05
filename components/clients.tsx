export function Clients() {
  const clients = ["Client One", "Client Two", "Client Three", "Client Four", "Client Five", "Client Six"]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Clients & Partners</h2>
          <p className="text-muted-foreground text-lg">Trusted by leading organizations across India and globally</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <span className="text-muted-foreground font-medium text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
