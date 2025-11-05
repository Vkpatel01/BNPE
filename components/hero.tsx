import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-b from-primary via-secondary to-background relative overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=power+plant+industrial+infrastructure)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering the Nation with Reliable Energy Solutions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading expertise in power infrastructure, EPC projects, and industrial engineering. Delivering excellence
            for over two decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
