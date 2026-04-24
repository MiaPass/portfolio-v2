'use client'

import { useState } from 'react'
import MarketingLayout from '@/components/layout/MarketingLayout'
import Hero from '@/components/sections/Hero'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "Residential",
      description: "A stunning 3,500 sq ft modern family home with open concept design, premium finishes, and energy-efficient features.",
      location: "Westfield, NJ",
      completionDate: "March 2024",
      budget: "$850,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "Commercial",
      description: "A 5-story office building featuring modern architecture, sustainable design, and state-of-the-art facilities.",
      location: "Downtown, NY",
      completionDate: "February 2024",
      budget: "$2.3M",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Luxury Kitchen Renovation",
      category: "Renovation",
      description: "Complete kitchen renovation with custom cabinetry, premium appliances, and quartz countertops.",
      location: "Summit, NJ",
      completionDate: "January 2024",
      budget: "$125,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "A 12,000 sq ft retail shopping center with multiple tenant spaces and modern amenities.",
      location: "Paramus, NJ",
      completionDate: "December 2023",
      budget: "$1.8M",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Custom Luxury Home",
      category: "Residential",
      description: "A 6,200 sq ft custom luxury home with smart home technology, home theater, and outdoor living space.",
      location: "Short Hills, NJ",
      completionDate: "November 2023",
      budget: "$1.5M",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "Restaurant Renovation",
      category: "Renovation",
      description: "Complete renovation of a 3,000 sq ft restaurant with new kitchen equipment and dining area.",
      location: "Montclair, NJ",
      completionDate: "October 2023",
      budget: "$275,000",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  const categories = ["All", "Residential", "Commercial", "Renovation"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <MarketingLayout>
      <Hero
        title="Our Construction Projects"
        subtitle="Explore our portfolio of successful residential, commercial, and renovation projects. Each project showcases our commitment to quality, craftsmanship, and client satisfaction."
        ctaText="Start Your Project"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.completionDate}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <a href={`/projects/${project.id}`}>
                      <span className="absolute inset-0"></span>
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{project.location}</span>
                    <span className="font-semibold text-orange-600">{project.budget}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your construction needs and create something amazing together.
            </p>
            <a
              href="/contact"
              className="rounded-md bg-orange-600 px-6 py-3 text-lg font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
