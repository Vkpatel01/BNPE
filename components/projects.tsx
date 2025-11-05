import { Card } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "Thermal Power Plant - 500 MW",
      description: "Complete turnkey development and operation of a state-of-the-art thermal power facility.",
      image: "/thermal-power-plant-industrial.jpg",
    },
    {
      title: "Industrial Manufacturing Complex",
      description: "Design and construction of integrated manufacturing and power generation facility.",
      image: "/industrial-manufacturing-complex.jpg",
    },
    {
      title: "Renewable Energy Hub",
      description: "Multi-MW solar and wind energy integration project with advanced grid connectivity.",
      image: "/solar-wind-renewable-energy-farm.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing our expertise in delivering world-class energy infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow border-0 bg-card">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
