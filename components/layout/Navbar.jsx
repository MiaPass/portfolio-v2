'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  BriefcaseIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Residential Construction',
    description: 'Custom homes and residential projects built to last',
    href: '/services/residential',
    icon: HomeIcon,
  },
  {
    name: 'Commercial Construction',
    description: 'Professional commercial spaces for your business',
    href: '/services/commercial',
    icon: BriefcaseIcon,
  },
  {
    name: 'Renovations',
    description: 'Transform your existing space with quality renovations',
    href: '/services/renovations',
    icon: WrenchScrewdriverIcon,
  },
]

const callsToAction = [
  { name: 'Get a Quote', href: '/contact', icon: PhoneIcon },
  { name: 'View Projects', href: '/projects', icon: BriefcaseIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative isolate z-10 bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BuildPro Construction</span>
            <div className="flex items-center">
              <WrenchScrewdriverIcon className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-white">BuildPro</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-gray-900 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-gray-900 ring-1 ring-white/15" />
              <div className="relative bg-gray-900">
                <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {services.map((item) => (
                    <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-white/5">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-amber-600/20 group-hover:bg-amber-600/30">
                        <item.icon aria-hidden="true" className="size-6 text-amber-400 group-hover:text-amber-300" />
                      </div>
                      <Link href={item.href} className="mt-6 block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800/50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-white/5 border-x border-white/10">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
                        >
                          <item.icon aria-hidden="true" className="size-5 flex-none text-amber-400" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/projects" className="text-sm/6 font-semibold text-white">
            Projects
          </Link>
          <Link href="/about" className="text-sm/6 font-semibold text-white">
            About
          </Link>
          <Link href="/contact" className="text-sm/6 font-semibold text-white">
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500">
            Get a Quote
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">BuildPro Construction</span>
              <div className="flex items-center">
                <WrenchScrewdriverIcon className="h-8 w-8 text-amber-500" />
                <span className="ml-2 text-xl font-bold text-white">BuildPro</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <div className="font-semibold text-white mb-4">Services</div>
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
