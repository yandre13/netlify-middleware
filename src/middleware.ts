import { MiddlewareRequest } from '@netlify/next'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  // @ts-ignore
  const request = new MiddlewareRequest(req)

  if (path.startsWith('/static')) {
    const response = await request.next()
    const message = `
      Hello from ${request.geo.city}, ${request.geo.country} using @netlify/next middleware.ts
    `

    response.replaceText('h1', message)
    response.setPageProp('message', message)

    return response
  }
}
