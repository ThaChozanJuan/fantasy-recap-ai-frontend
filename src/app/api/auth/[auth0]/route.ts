import { initAuth0 } from '@auth0/nextjs-auth0';

export const GET = initAuth0().routeHandler;
export const POST = initAuth0().routeHandler;

export const runtime = 'edge';