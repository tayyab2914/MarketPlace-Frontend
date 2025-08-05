import { NextResponse } from "next/server";

// Define routes that should be blocked if user is authenticated
const AUTH_BLOCKED_ROUTES = ["/account", "/account/signin", "/account/signup"];

export function middleware(request) {
  const token = request.cookies.get("token")?.value; // Or use your own cookie/session name
  const url = request.nextUrl;

  // If user is authenticated and trying to visit /account or /signin
  if (token && AUTH_BLOCKED_ROUTES.includes(url.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"], // Apply to all account routes
};
