'use client';

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'HowTo' | 'Article';
  data: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
