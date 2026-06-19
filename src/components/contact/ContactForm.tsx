'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactLead } from '@/types/lead';
import { contactSchema } from '@/validations/contact.schema';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactLead>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactLead) {
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('Message sent successfully.');
      reset();
    } else {
      setStatus('Unable to send message. Please try again later.');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Name</span>
          <input type="text" {...register('name')} className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500" />
          {errors.name && <p className="text-sm text-rose-400">{errors.name.message}</p>}
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input type="email" {...register('email')} className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500" />
          {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">Company</span>
        <input type="text" {...register('company')} className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500" />
        {errors.company && <p className="text-sm text-rose-400">{errors.company.message}</p>}
      </label>
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">Message</span>
        <textarea rows={6} {...register('message')} className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-500" />
        {errors.message && <p className="text-sm text-rose-400">{errors.message.message}</p>}
      </label>
      <button type="submit" disabled={isSubmitting} className="hover:bg-brand-400 inline-flex justify-center rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
      {status && <p className="text-sm text-slate-300">{status}</p>}
    </form>
  );
}
