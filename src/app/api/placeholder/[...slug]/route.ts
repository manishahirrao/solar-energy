import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const [width, height] = slug;
  
  // Validate dimensions
  const w = parseInt(width) || 400;
  const h = parseInt(height) || 300;
  
  // Limit maximum dimensions to prevent abuse
  const maxWidth = 2000;
  const maxHeight = 2000;
  const finalWidth = Math.min(w, maxWidth);
  const finalHeight = Math.min(h, maxHeight);
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${finalWidth}" height="${finalHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af">
        ${finalWidth} × ${finalHeight}
      </text>
    </svg>
  `;
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
