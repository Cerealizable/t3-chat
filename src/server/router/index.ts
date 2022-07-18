// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';
import fetch from 'node-fetch';
import { roomRouter } from './room';
import { authRouter } from './auth';

if (!global.fetch) {
	(global.fetch as any) = fetch;
}

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('room.', roomRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
