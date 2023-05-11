import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const res = await fetch('https://fakestoreapi.com/products/2')
  const data = await res.json()

  const { geo } = request
  console.log(geo)
  console.log(`Hello from ${geo?.city}, ${geo?.country}`)
  const extra = {
    city: geo?.city,
    country: geo?.country,
  }
  return NextResponse.json({ data, extra })
}
