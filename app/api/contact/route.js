import { NextResponse } from 'next/server';
import getMongoClientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { from_name, from_email, message } = body;

    // Validate required fields
    if (
      !from_name || typeof from_name !== 'string' || from_name.trim().length < 2 ||
      !from_email || typeof from_email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email) ||
      !message || typeof message !== 'string' || message.trim().length < 10
    ) {
      return NextResponse.json({ error: 'Invalid submission data' }, { status: 400 });
    }

    const client = await getMongoClientPromise();
    const db = client.db('adcheckup');

    await db.collection('contacts').insertOne({
      name: from_name.trim(),
      email: from_email.trim().toLowerCase(),
      message: message.trim(),
      submittedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error saving contact submission:', err);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}
