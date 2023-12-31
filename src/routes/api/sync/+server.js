import { env } from '$env/dynamic/private';
import { readFile, writeFile } from 'node:fs/promises';

/**
 * This function sets the sync data for the given id.
 *
 * @type {import('./$types').RequestHandler}
 */
export async function PUT({ request }) {
  /** @type {SyncPayload} */
  const payload = await request.json();

  if (!env.SYNC_IDS?.includes(payload.syncId)) {
    return new Response(null, { status: 403 });
  }

  const fileContent = JSON.stringify(payload);

  writeFile(`tmp/${payload.syncId}.json`, fileContent, { flag: 'w+' });

  return new Response();
}

/**
 * This function returns the sync data for the given id.
 *
 * @type {import('./$types').RequestHandler}
 */
export async function GET({ url }) {
  const id = url.searchParams.get('id');

  if (!id || !env.SYNC_IDS?.includes(id)) {
    return new Response(null, { status: 403 });
  }

  try {
    const fileContent = await readFile(`tmp/${id}.json`);
    return new Response(fileContent, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch {
    return new Response(null, { status: 404 });
  }
}
