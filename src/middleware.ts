import { NextRequest, NextResponse, userAgent } from 'next/server';
import { isbot } from 'isbot'; // Default import
import { headers } from 'next/headers';


export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const user_agent = headers().get("user-agent") || ''

    const userAgent = request.headers.get('user-agent') || '';
    console.log(userAgent, request.headers)
    const isBot = isbot(user_agent); // Use isbot correctly

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-is-bot', isBot ? 'true' : 'false');
    // console.log("User-Agent:", request.headers.get('user-agent'));
    // console.log("Is Bot:", isBot);
    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });
}
export const config = {
    matcher:'/'
}