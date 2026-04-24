import MarketingLayout from '@/components/layout/MarketingLayout'
import Hero from '@/components/sections/Hero'
import {
  WrenchScrewdriverIcon,
  UsersIcon,
  TrophyIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Years of Experience', value: '15+' },
    { label: 'Satisfied Clients', value: '98%' },
    { label: 'Team Members', value: '25+' },
  ]

  const values = [
    {
      name: 'Quality Craftsmanship',
      description: 'We take pride in delivering exceptional quality in every project, using premium materials and proven construction techniques.',
      icon: TrophyIcon,
    },
    {
      name: 'Reliability',
      description: 'We complete projects on time and within budget, maintaining clear communication throughout the entire process.',
      icon: ClockIcon,
    },
    {
      name: 'Safety First',
      description: 'Safety is our top priority. We maintain the highest safety standards to protect our team, clients, and communities.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Client Satisfaction',
      description: 'Our success is measured by client satisfaction. We work closely with you to ensure your vision becomes reality.',
      icon: StarIcon,
    },
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'John founded BuildPro Construction with a vision to deliver exceptional construction services. With over 20 years in the industry, he leads our team with passion and expertise.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'Sarah brings 12 years of project management experience to ensure every project runs smoothly, on time, and within budget.',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'Mike leads our design team, creating innovative and functional spaces that exceed client expectations while maintaining aesthetic appeal.',
    },
  ]

  return (
    <MarketingLayout>
      <Hero
        title="About BuildPro Construction"
        subtitle="Building trust and excellence in the construction industry for over 15 years. We're committed to delivering quality projects that stand the test of time."
        ctaText="Get to Know Us"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  BuildPro Construction was founded in 2009 with a simple mission: to provide exceptional construction services with integrity, quality, and reliability. What started as a small residential construction company has grown into a full-service construction firm serving both residential and commercial clients throughout New Jersey.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Over the past 15 years, we've built a reputation for excellence by consistently delivering projects on time, within budget, and to the highest quality standards. Our team of skilled professionals brings together decades of experience in construction, project management, and design.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Today, we're proud to be one of the most trusted construction companies in the region, known for our commitment to client satisfaction and our ability to bring even the most complex projects to life.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="BuildPro Construction team"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-amber-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                By the Numbers
              </h2>
              <p className="mt-4 text-lg leading-8 text-amber-100">
                Our track record speaks for itself. Here are some key statistics that demonstrate our commitment to excellence.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-amber-200">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide everything we do, from initial consultation to project completion.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-4 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced team of professionals is dedicated to delivering exceptional results on every project.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="flex flex-col items-start justify-between">
                <div className="w-full">
                  <img
                    alt={person.name}
                    src={person.image}
                    className="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-base font-semibold leading-7 text-amber-600">{person.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with Us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-amber-100">
              Let's discuss your construction project and see how our expertise can bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-amber-600 hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="text-lg font-semibold leading-6 text-white hover:text-amber-100 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
