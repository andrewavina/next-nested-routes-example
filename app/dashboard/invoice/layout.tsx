import TopBar from '@/components/TopBar'

export default function InvoiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-full">
      <TopBar title="Invoice" />
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>
    </div>
  )
}