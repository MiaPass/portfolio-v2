import Link from 'next/link'

export default function Hero({
  title,
  subtitle,
  ctaText = "Get a Quote",
  ctaLink = "/contact",
  image,
  backgroundImage,
  className = ""
}) {
  return (
    <section className={`relative py-32 ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            {subtitle}
          </p>

          {ctaText && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={ctaLink}
                className="rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white hover:bg-amber-500 transition-colors"
              >
                {ctaText}
              </Link>
              <Link
                href="/projects"
                className="text-lg font-semibold leading-6 text-white hover:text-amber-400 transition-colors"
              >
                View Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

          {image && (
            <img
              src={image}
              alt=""
              className="mt-12 rounded-xl shadow-2xl ring-1 ring-white/10"
            />
          )}
        </div>
      </div>
    </section>
  )
}
