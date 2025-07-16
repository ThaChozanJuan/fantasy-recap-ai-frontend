import { handleAuth } from '@auth0/nextjs-auth0';

const config = {
  baseURL: process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : 'http://localhost:3000',
  issuerBaseURL: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  secret: process.env.AUTH0_SECRET,
};

export const GET = handleAuth(config);
export const POST = handleAuth(config);