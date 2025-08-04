'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TopBarProps {
  title: string
}

export default function TopBar({ title }: TopBarProps) {
  console.log('TopBar render');
  const pathname = usePathname()
  
  // Only show Add New button on invoice list page
  const showAddButton = pathname === '/dashboard/invoice'

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {showAddButton && (
          <Link
            href="/dashboard/invoice/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            + Add New
          </Link>
        )}
      </div>
    </div>
  )
}