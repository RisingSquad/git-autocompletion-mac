/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
 */
export { homedir } from 'std/node/os.ts';
export { exists } from 'std/fs/mod.ts';
export { download } from 'https://deno.land/x/download@v2.0.2/mod.ts';
