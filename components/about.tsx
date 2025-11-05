import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/industrial-engineering-power-plant.jpg"
              alt="BN Power Industrial Operations"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About BN Power</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              BN Power is a leading provider of power infrastructure solutions with a commitment to excellence, safety,
              and innovation. Our team of experienced engineers and project managers deliver comprehensive solutions for
              the energy sector.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              With a track record of successful projects across India and internationally, we bring technical expertise
              and operational excellence to every endeavor.
            </p>
            <Button className="bg-primary hover:bg-primary/90">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
