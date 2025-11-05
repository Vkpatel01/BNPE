import { Card } from "@/components/ui/card"
import { Zap, Wrench, Leaf, Briefcase } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Power Projects",
      description: "End-to-end power plant development, construction, and commissioning services.",
      icon: Zap,
    },
    {
      title: "Engineering & Construction",
      description: "Comprehensive EPC solutions for industrial and infrastructure projects.",
      icon: Wrench,
    },
    {
      title: "O&M Services",
      description: "Professional operation and maintenance services for optimal performance.",
      icon: Briefcase,
    },
    {
      title: "Renewable Energy",
      description: "Sustainable energy solutions including solar, wind, and hybrid systems.",
      icon: Leaf,
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your energy and infrastructure needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow border border-border bg-card">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
