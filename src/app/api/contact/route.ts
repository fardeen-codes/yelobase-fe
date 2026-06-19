import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { contactSchema } from '@/validations/contact.schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    console.log('Lead received:', data);

    return NextResponse.json({ success: true, message: 'Lead submitted successfully.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.flatten() }, { status: 422 });
    }
    return NextResponse.json({ success: false, message: 'Unable to process the contact request.' }, { status: 500 });
  }
}
