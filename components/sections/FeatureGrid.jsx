export default function FeatureGrid({
  features,
}) {
  return (
    <section className="py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">
              {f.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
