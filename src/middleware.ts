import { NextRequest, NextResponse } from 'next/server';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-powered-by', 'Yelobase');
  return response;
}

export const config = { matcher: ['/', '/blogs/:path*', '/contact', '/customer-stories'] };
