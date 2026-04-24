import MarketingLayout from '@/components/layout/MarketingLayout'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'

export default function Home() {
  return (
    <MarketingLayout>
      <Hero
        title="Building Excellence, One Project at a Time"
        subtitle="Trusted construction company delivering quality residential and commercial projects with over 15 years of experience. From custom homes to commercial developments, we bring your vision to life."
        ctaText="Get a Quote"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <Features
        title="Our Construction Services"
        subtitle="We provide comprehensive construction solutions tailored to meet your specific needs and budget requirements."
      />

      {/* Recent Projects Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take a look at some of our latest construction projects that showcase our commitment to quality and excellence.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern residential construction"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime="2024-03-16" className="mr-8">Mar 16, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white">Residential</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/projects/modern-family-home">
                  <span className="absolute inset-0"></span>
                  Modern Family Home
                </a>
              </h3>
            </article>

            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Commercial office building"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime="2024-02-10" className="mr-8">Feb 10, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white">Commercial</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/projects/office-complex">
                  <span className="absolute inset-0"></span>
                  Office Complex
                </a>
              </h3>
            </article>

            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury kitchen renovation"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime="2024-01-28" className="mr-8">Jan 28, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white">Renovation</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/projects/luxury-kitchen">
                  <span className="absolute inset-0"></span>
                  Luxury Kitchen Renovation
                </a>
              </h3>
            </article>
          </div>
          <div className="mt-16 text-center">
            <a
              href="/projects"
              className="rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white hover:bg-amber-500 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 sm:row-span-2 xl:col-span-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>"BuildPro Construction exceeded our expectations in every way. Their attention to detail and commitment to quality made our dream home a reality. The project was completed on time and within budget."</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <img
                  alt="Sarah Johnson"
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="flex-auto">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-600">Homeowner</div>
                </div>
                <div className="flex text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.681 3.462 3.82.556c.734.107 1.03.998.494 1.512l-2.764 2.693.654 3.803c.124.723-.638 1.283-1.296.952L10 15.187l-3.414 1.795c-.658.331-1.42-.229-1.296-.952l.654-3.803-2.764-2.693c-.536-.514-.24-1.405.494-1.512l3.82-.556L9.132 2.884z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </figcaption>
            </figure>

            <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900">
                <p>"Professional, reliable, and skilled. BuildPro handled our commercial renovation project with expertise. They maintained excellent communication throughout the entire process."</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  alt="Michael Chen"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-gray-600">Business Owner</div>
                </div>
              </figcaption>
            </figure>

            <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900">
                <p>"The quality of work and attention to detail was outstanding. Our kitchen renovation transformed our entire home. I highly recommend BuildPro for any construction project."</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  alt="Emily Rodriguez"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div>
                  <div className="font-semibold">Emily Rodriguez</div>
                  <div className="text-gray-600">Homeowner</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-amber-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-amber-100">
              Get a free quote for your construction project. Our team is ready to bring your vision to life with quality craftsmanship and reliable service.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-amber-600 hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
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
