import {
  HomeIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export default function Features({
  title = "Our Services",
  subtitle = "We provide comprehensive construction solutions for residential and commercial projects",
  features = [
    {
      icon: HomeIcon,
      title: "Residential Construction",
      description: "Custom homes built with precision and care. From foundation to finish, we create the home of your dreams.",
      link: "/services/residential"
    },
    {
      icon: BriefcaseIcon,
      title: "Commercial Construction",
      description: "Professional commercial spaces designed for functionality and aesthetics. Offices, retail, and industrial buildings.",
      link: "/services/commercial"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Renovations & Remodeling",
      description: "Transform your existing space with quality renovations. Kitchen, bathroom, and whole-home remodeling.",
      link: "/services/renovations"
    },
    {
      icon: ClockIcon,
      title: "Project Management",
      description: "Complete project oversight from planning to completion. On-time and on-budget delivery guaranteed.",
      link: "/services/project-management"
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage. Licensed, bonded, and insured for your peace of mind.",
      link: "/services/quality-assurance"
    },
    {
      icon: UsersIcon,
      title: "Consultation Services",
      description: "Expert consultation for your construction needs. Planning, design, and feasibility studies.",
      link: "/services/consultation"
    }
  ],
  showCta = true,
  ctaText = "Get a Free Quote",
  ctaLink = "/contact"
}) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
                {feature.link && (
                  <div className="mt-6">
                    <a
                      href={feature.link}
                      className="text-sm font-semibold leading-6 text-amber-600 hover:text-amber-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showCta && (
          <div className="mt-16 text-center">
            <a
              href={ctaLink}
              className="rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white hover:bg-amber-500 transition-colors"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
