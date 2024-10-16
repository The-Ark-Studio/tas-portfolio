import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const isMobile = device.type === 'mobile';
  const response = NextResponse.next();
  response.cookies.set('isMobile', JSON.stringify(isMobile), { path: '/' });
  return response;
}

export const config = { 
  matcher: ['/', '/projects','/technologies', '/people', '/contacts'],
}

