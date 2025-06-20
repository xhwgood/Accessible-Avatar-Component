import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  loading?: 'eager' | 'lazy';
  ariaLabel?: string;
  className?: string;
  placeholder?: React.ReactNode;
}

export default function Avatar({
  src,
  alt,
  size = 48,
  loading = 'lazy',
  ariaLabel,
  className = '',
  placeholder
}: AvatarProps) {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <span
      className={`inline-block rounded-full overflow-hidden bg-gray-200 relative ${className}`}
      style={{ width: size, height: size }}
      aria-label={ariaLabel || alt}
      role="img"
    >
      {!imgLoaded && (
        placeholder || (
          <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs bg-gray-100 animate-pulse">
            <svg width={size/2} height={size/2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>
          </span>
        )
      )}
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        loading={loading}
        className={`object-cover w-full h-full ${imgLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setImgLoaded(true)}
        aria-label={ariaLabel || alt}
      />
    </span>
  );
}
