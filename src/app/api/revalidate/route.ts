import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  const body = await request.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret.' }, { status: 401 });
  }

  const path = body?.path || '/';
  try {
    await revalidatePath(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: String(error) }, { status: 500 });
  }
}
