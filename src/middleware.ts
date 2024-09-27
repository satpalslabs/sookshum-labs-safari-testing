import { NextRequest, NextResponse } from 'next/server';
import { isbot } from 'isbot';

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const isBot = isbot(userAgent);

    const response = NextResponse.next();

    // Set the x-is-bot header
    response.headers.set('x-is-bot', isBot ? 'true' : 'false');

    // Conditionally set the X-Robots-Tag header
    const isLocalhost = request.headers.get('host')?.includes('localhost');

    // Allow indexing for both production and preview environments
    if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview') {
        response.headers.set('X-Robots-Tag', 'index, follow');
    }
    // Block indexing for local and development environments
    else if (process.env.VERCEL_ENV === 'development' || isLocalhost) {
        response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    }
    return response;
}

export const config = {
    matcher: '/:path*'
};
