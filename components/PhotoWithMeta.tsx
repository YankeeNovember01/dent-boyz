import Image from 'next/image';

interface PhotoWithMetaProps {
  src: string;
  alt: string;
  city?: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function PhotoWithMeta({ src, alt, city, width, height, className, priority }: PhotoWithMetaProps) {
  // Build geo-enriched alt text if city provided and alt doesn't already contain it
  const enrichedAlt = city && !alt.includes(city) ? `${alt} — ${city}, TX | Dent Boyz` : alt;

  return (
    <Image
      src={src}
      alt={enrichedAlt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
