import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MBA Marketplace',
  description: 'MBA Marketplace',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="h-full grid grid-cols-10">
      <section className="col-span-6 flex flex-col">
        <div className="mt-10 ml-10">
          <Image
            src="/logo.svg"
            alt="Logo do marketplace"
            width={268}
            height={69}
            priority
          />
        </div>
        <div className="m-auto">
          <Image
            src="/background.png"
            alt="Logo do marketplace"
            style={{ width: '100%', height: 'auto' }}
            width={1200}
            height={0}
            priority
          />
        </div>
      </section>

      <section className={'col-span-4 m-6 bg-shape-white rounded-[32px]'}>
        {children}
      </section>
    </section>
  )
}
