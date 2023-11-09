import { cookies, draftMode } from 'next/headers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()
  return (
    <html lang="en">
      <body>{children}</body>
      {isEnabled && (
        <div>
          Draft mode ({cookies().get('ks-branch')?.value}){' '}
          <form method="POST" action="/preview/end">
            <button>End preview</button>
          </form>
        </div>
      )}
    </html>
  )
}
