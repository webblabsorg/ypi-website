interface TechnicalSpec {
  label: string;
  value: string;
}

interface TechnicalSpecsProps {
  specs: TechnicalSpec[];
  title?: string;
}

export function TechnicalSpecs({ specs, title = "Technical Specifications" }: TechnicalSpecsProps) {
  return (
    <section className="py-12">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">{title}</h2>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <dl className="divide-y divide-gray-200">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 hover:bg-gray-50 transition-colors"
              >
                <dt className="text-sm font-semibold text-navy flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  {spec.label}
                </dt>
                <dd className="text-sm text-gray-900 font-medium md:text-right">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
