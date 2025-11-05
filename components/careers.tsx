export function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Senior Power Engineer",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Looking for experienced power engineers with 5+ years in infrastructure projects.",
    },
    {
      id: 2,
      title: "Project Manager",
      location: "Delhi, India",
      type: "Full-time",
      description: "Lead large-scale industrial projects and manage cross-functional teams.",
    },
    {
      id: 3,
      title: "Electrical Design Engineer",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Design and optimize electrical systems for renewable and conventional power plants.",
    },
    {
      id: 4,
      title: "Business Development Executive",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Develop business partnerships and drive growth in emerging markets.",
    },
  ]

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're looking for talented professionals to join BN Power and help shape the future of power infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {jobs.map((job) => (
            <div key={job.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <button className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Don't see your role?</h3>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals. Send your resume to careers@bnpower.com
          </p>
          <a
            href="mailto:careers@bnpower.com"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </section>
  )
}
