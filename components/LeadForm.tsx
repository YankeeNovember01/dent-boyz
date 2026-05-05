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
      <div className="bg-navy border-l-4 border-gold p-8 text-white">
        <div className="w-12 h-0.5 bg-gold mb-4"></div>
        <h3 className="text-2xl font-bold text-white mb-2">We got your request.</h3>
        <p className="text-gray-300">A Dent Boyz specialist will contact you within 1 business hour. Need immediate help? Call us at <a href="tel:2145550100" className="text-gold font-semibold hover:underline">(214) 555-0100</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full bg-navy-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-1">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(214) 555-0100"
            className="w-full bg-navy-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-navy-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-semibold text-gray-300 mb-1">ZIP Code *</label>
          <input
            id="zip"
            name="zip"
            type="text"
            required
            value={form.zip}
            onChange={handleChange}
            placeholder="75034"
            className="w-full bg-navy-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-300 mb-1">Vehicle (Year / Make / Model) *</label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          required
          value={form.vehicle}
          onChange={handleChange}
          placeholder="2023 Ford F-150"
          className="w-full bg-navy-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1">Additional Notes (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the damage, when the storm occurred, or any other details..."
          className="w-full bg-navy-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-500 resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="border border-red-400 bg-red-900/20 p-3 text-red-300 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold text-navy font-extrabold py-4 text-lg hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Get My Free Estimate'}
      </button>

      <p className="text-xs text-gray-500 text-center">No spam. No obligation. We&apos;ll call you within 1 business hour.</p>
    </form>
  );
}
