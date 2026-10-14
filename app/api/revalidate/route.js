import { revalidateTag } from 'next/cache';

// Called by the Laravel admin after every save/delete so content updates go live immediately.
export async function POST(request) {
  const { secret } = await request.json().catch(() => ({}));

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ ok: false }, { status: 401 });
  }

  revalidateTag('cms', { expire: 0 });
  return Response.json({ ok: true });
}
