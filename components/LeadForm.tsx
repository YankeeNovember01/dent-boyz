'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  zip: string;
  message: string;
}

export default function LeadForm() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    zip: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source_page: pathname }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }
      setStatus('success');
      setForm({ name: '', phone: '', email: '', vehicle: '', zip: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">We got your request!</h3>
        <p className="text-green-700">A Dent Boyz specialist will contact you within 1 business hour. If you need immediate assistance, call us at <a href="tel:2145550100" className="font-semibold underline">(214) 555-0100</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(214) 555-0100"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-semibold text-gray-700 mb-1">ZIP Code *</label>
          <input
            id="zip"
            name="zip"
            type="text"
            required
            value={form.zip}
            onChange={handleChange}
            placeholder="75034"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-1">Vehicle (Year / Make / Model) *</label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          required
          value={form.vehicle}
          onChange={handleChange}
          placeholder="2023 Ford F-150"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the damage, when the storm occurred, or any other details..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold text-navy font-extrabold py-4 rounded-lg text-lg hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Get My Free Estimate'}
      </button>

      <p className="text-xs text-gray-500 text-center">No spam. No obligation. We&apos;ll call you within 1 business hour.</p>
    </form>
  );
}
