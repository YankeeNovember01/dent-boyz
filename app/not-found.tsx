import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="text-8xl font-extrabold text-[#0a1628] mb-4">404</div>
        <h1 className="text-2xl font-bold text-[#0a1628] mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist. Looking for hail damage repair in North Dallas?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/hail-damage-repair" className="bg-[#c9a84c] text-white px-8 py-4 font-bold hover:bg-[#b8963f] transition-colors">View Our Services</Link>
          <Link href="/free-estimate" className="bg-[#0a1628] text-white px-8 py-4 font-bold hover:bg-[#1a2638] transition-colors">Get Free Inspection</Link>
        </div>
      </div>
    </main>
  )
}
