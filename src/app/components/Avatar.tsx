'use client';
import Image from 'next/image';
import React from 'react';

// Avatar component props interface as specified in the task
type AvatarProps = {
  src?: string;
  alt: string;
  priority?: boolean;
  size?: number;
};

export default function Avatar({
  src,
  alt,
  priority = false,
  size = 48
}: AvatarProps) {
  // Use default avatar if no src is provided
  const imageSrc = src || '/avatar.png';
  
  // Only use placeholder for images larger than 40px to avoid performance warnings
  const shouldUsePlaceholder = size > 40;

  return (
    <div
      className="relative inline-block rounded-full overflow-hidden bg-gray-200"
      style={{ width: size, height: size }}
      role="img"
      aria-label={alt}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="object-cover w-full h-full"
        // Blur placeholder for better perceived performance (only for larger images)
        {...(shouldUsePlaceholder && {
          placeholder: "blur",
          blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY3ZWU5O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM2NzNlMztzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTY2M2U3O3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9InVybCgjZ3JhZCkiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgogIDxwYXRoIGQ9Ik00MCAxNjAgUTEwMCAxMjAgMTYwIDE2MCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC45Ii8+Cjwvc3ZnPgo="
        })}
        // Loading strategy based on priority prop
        loading={priority ? 'eager' : 'lazy'}
        // Prevent layout shift by enforcing explicit dimensions
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

/*
 * Optimization Notes:
 * 
 * How <Image> from next/image optimizes performance:
 * 
 * 1. Automatic Image Optimization:
 *    - Automatically resizes images to the specified width/height
 *    - Converts images to modern formats (WebP/AVIF) when supported by the browser
 *    - Reduces file size while maintaining quality
 * 
 * 2. Lazy Loading and Blur Placeholders:
 *    - Supports lazy loading for images below the fold (when priority=false)
 *    - Blur-up placeholders provide smooth UX during image loading (only for images > 40px)
 *    - Prevents layout shift with proper width/height attributes
 * 
 * 3. Cumulative Layout Shift (CLS) Prevention:
 *    - Enforces explicit width and height to prevent layout shifts
 *    - Uses object-cover to maintain aspect ratio while filling the container
 *    - Responsive design with proper sizing
 * 
 * 4. Development vs Production Behavior:
 *    - In development: Shows full-size images for easier debugging
 *    - In production: Applies all optimizations including format conversion and resizing
 *    - Blur placeholders work in both environments
 * 
 * 5. Accessibility Features:
 *    - Always includes alt text for screen readers
 *    - Uses role="img" and aria-label for better accessibility
 *    - Proper semantic structure for assistive technologies
 * 
 * 6. Security and Performance:
 *    - Only loads images from configured remotePatterns in next.config.mjs
 *    - Prevents arbitrary domain loading for security
 *    - Optimized loading strategies based on priority prop
 *    - Conditional placeholder usage to avoid performance warnings
 */
