import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Hallucination Unit Tester',
  description: 'Unit tests for AI prompt hallucinations. Automatically detect when AI outputs contain hallucinations or factual errors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ea474afb-d059-4197-8086-dcebf2aa35e8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
