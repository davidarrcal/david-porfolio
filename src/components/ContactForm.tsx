import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const baseInputClasses =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/40';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
          placeholder="Tu nombre"
          className={baseInputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
          placeholder="tu@email.com"
          className={baseInputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
          placeholder="Escribe tu mensaje..."
          className={baseInputClasses + ' resize-none'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="w-full rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Mensaje enviado ✓' : 'Enviar mensaje'}
      </button>
      {status === 'error' && (
        <p className="text-center text-sm text-red-400">Hubo un error al enviar. Inténtalo de nuevo.</p>
      )}
    </form>
  );
}