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

    // Prevent indexing only for non-production and non-localhost environments (e.g., staging)
    if (process.env.VERCEL_ENV !== 'production' && !isLocalhost) {
        response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    } else {
        response.headers.set('X-Robots-Tag', 'index, follow');
    }

    return response;
}

export const config = {
    matcher: '/:path*'
};
