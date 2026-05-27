import { useState } from 'react';

const FORMSPREE_ID = 'xkoeknag';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('Send failed');
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const baseInputClasses =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-300">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
          placeholder="Tu nombre"
          className={baseInputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
          placeholder="tu@email.com"
          className={baseInputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          placeholder="Escribe tu mensaje..."
          className={baseInputClasses + ' resize-none'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="btn-primary w-full"
      >
        {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Mensaje enviado ✓' : 'Enviar mensaje'}
      </button>
      {status === 'error' && (
        <p className="text-center text-sm text-red-400">Hubo un error al enviar. Intenta de nuevo.</p>
      )}
    </form>
  );
}