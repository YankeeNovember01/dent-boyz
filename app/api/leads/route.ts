import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ptdvazakndnykuyznvxq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0ZHZhemFrbmRueWt1eXpudnhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MzQwMzQsImV4cCI6MjA5MzUxMDAzNH0.AypKiGEMwfBtBH2XlD2r7BWgPycfw03jMmWSllZr1Dk'
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, vehicle, zip, message, source_page } = body;

    if (!name || !phone || !email || !vehicle || !zip) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase.from('leads').insert({
      name,
      phone,
      email,
      vehicle,
      zip,
      message: message || null,
      source_page: source_page || '/',
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
