import { NextResponse } from 'next/server';

// Responds to latency ping checks
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}

// Responds with system health status JSON
export async function GET() {
  return NextResponse.json({
    status: 'operational',
    service: 'BI-TECH Edge Gateway',
    timestamp: new Date().toISOString(),
  });
}