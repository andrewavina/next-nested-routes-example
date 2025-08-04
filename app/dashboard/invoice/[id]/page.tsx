import Link from 'next/link'
import { notFound } from 'next/navigation'

// Mock data - in a real app, this would come from a database
const invoiceData: Record<string, any> = {
  '001': {
    id: '001',
    client: 'Acme Corp',
    email: 'billing@acmecorp.com',
    date: '2024-01-15',
    dueDate: '2024-02-15',
    status: 'Paid',
    amount: 2500.00,
    description: 'Web development services for Q1 2024',
    items: [
      { description: 'Frontend Development', hours: 40, rate: 50, total: 2000 },
      { description: 'Backend Integration', hours: 10, rate: 50, total: 500 },
    ]
  },
  '002': {
    id: '002',
    client: 'Tech Solutions',
    email: 'payments@techsolutions.com',
    date: '2024-01-20',
    dueDate: '2024-02-20',
    status: 'Pending',
    amount: 1800.00,
    description: 'Mobile app development consultation',
    items: [
      { description: 'App Consultation', hours: 24, rate: 75, total: 1800 },
    ]
  },
  '003': {
    id: '003',
    client: 'Design Studio',
    email: 'finance@designstudio.com',
    date: '2024-01-25',
    dueDate: '2024-02-25',
    status: 'Overdue',
    amount: 3200.00,
    description: 'UI/UX design system implementation',
    items: [
      { description: 'Design System', hours: 32, rate: 100, total: 3200 },
    ]
  },
}

interface InvoiceDetailPageProps {
  params: { id: string }
}

export default function InvoiceDetailPage({ params }: InvoiceDetailPageProps) {
  console.log('InvoiceDetailPage render');
  const invoice = invoiceData[params.id]
  
  if (!invoice) {
    notFound()
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <Link 
          href="/dashboard/invoice"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Invoices
        </Link>
        <h3 className="text-xl font-semibold text-gray-900 mt-2">
          Invoice #{invoice.id}
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Invoice Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Invoice Pro</h1>
              <p className="text-gray-600 mt-1">Professional Invoice Services</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-900">
                Invoice #{invoice.id}
              </h2>
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full mt-2 ${
                invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                invoice.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {invoice.status}
              </span>
            </div>
          </div>
        </div>

        {/* Client and Date Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Bill To
              </h3>
              <div className="text-gray-900">
                <p className="font-semibold">{invoice.client}</p>
                <p className="text-gray-600">{invoice.email}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Invoice Details
              </h3>
              <div className="space-y-1">
                <p><span className="text-gray-600">Date:</span> {invoice.date}</p>
                <p><span className="text-gray-600">Due Date:</span> {invoice.dueDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Items */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Services
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Description</th>
                  <th className="text-right py-2 text-sm font-medium text-gray-500">Hours</th>
                  <th className="text-right py-2 text-sm font-medium text-gray-500">Rate</th>
                  <th className="text-right py-2 text-sm font-medium text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item: any, index: number) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-gray-900">{item.description}</td>
                    <td className="py-3 text-right text-gray-600">{item.hours}</td>
                    <td className="py-3 text-right text-gray-600">${item.rate}</td>
                    <td className="py-3 text-right font-medium text-gray-900">${item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total */}
        <div className="p-6">
          <div className="flex justify-end">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                Total: ${invoice.amount.toLocaleString()}
              </div>
              <p className="text-gray-600 mt-1">{invoice.description}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Download PDF
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Send Email
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
              Mark as Paid
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}