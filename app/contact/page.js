'use client'

import { useState } from 'react'
import MarketingLayout from '@/components/layout/MarketingLayout'
import Hero from '@/components/sections/Hero'
import SuccessModal from '@/components/ui/SuccessModal'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      name: 'Phone',
      description: 'Call us to discuss your project',
      icon: PhoneIcon,
      details: '(555) 123-4567',
    },
    {
      name: 'Email',
      description: 'Send us your project details',
      icon: EnvelopeIcon,
      details: 'info@buildproconstruction.com',
    },
    {
      name: 'Address',
      description: 'Visit our office',
      icon: MapPinIcon,
      details: '123 Construction Ave, Newark, NJ 07102',
    },
    {
      name: 'Hours',
      description: 'We are available',
      icon: ClockIcon,
      details: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsModalOpen(true)

      // Reset form
      e.target.reset()
    }, 2000)
  }

  return (
    <MarketingLayout>
      <Hero
        title="Get in Touch with BuildPro Construction"
        subtitle="Ready to start your construction project? Contact us for a free consultation and quote. Our team is here to answer your questions and bring your vision to life."
        ctaText="Get a Free Quote"
        ctaLink="#contact-form"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Contact Information */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Let's Build Something Amazing Together
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you're planning a residential construction, commercial development, or renovation project, our team is ready to help. We offer free consultations and detailed quotes to ensure your project gets off to the right start.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Contact us today to discuss your construction needs and discover how our expertise can bring your vision to life.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <div key={item.name} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-x-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <p className="text-base font-semibold text-gray-900">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request a Free Quote
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
            </p>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="project-type" className="block text-sm font-semibold leading-6 text-gray-900">
                  Project type
                </label>
                <div className="mt-2.5">
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  >
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Renovation/Remodeling</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                  Estimated budget
                </label>
                <div className="mt-2.5">
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  >
                    <option>Under $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $250,000</option>
                    <option>$250,000 - $500,000</option>
                    <option>$500,000 - $1,000,000</option>
                    <option>Over $1,000,000</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Project details
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    placeholder="Please describe your project in detail..."
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`block w-full rounded-md px-6 py-3 text-lg font-semibold text-white transition-colors ${
                  isSubmitting
                    ? 'bg-orange-400 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-500'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Visit Our Office
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Come visit us at our headquarters to discuss your project in person.
            </p>
          </div>
          <div className="mt-16 aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="BuildPro Construction office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300">
              123 Construction Avenue, Newark, NJ 07102
            </p>
            <p className="text-gray-400 mt-2">
              Monday - Friday: 8AM - 6PM | Saturday: 9AM - 2PM
            </p>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Quote Request Sent!"
        message="Thank you for your interest in BuildPro Construction! We've received your quote request and will get back to you within 24 hours with a detailed proposal for your project."
      />
    </MarketingLayout>
  )
}
