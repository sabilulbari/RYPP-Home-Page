'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic regex validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim() || !emailRegex.test(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({
      type: 'success',
      message: 'Thanks for subscribing!',
    });
    setEmail('');

    setTimeout(() => {
      setStatus({ type: null, message: '' });
    }, 4000);
  };

  return (
    <div className="w-full">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
        Subscribe to our newsletter
      </h4>
      <p className="text-xs text-gray-400 mb-3">
        Get latest updates and offers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status.type) setStatus({ type: null, message: '' });
            }}
            placeholder="Enter your email"
            className="w-full bg-gray-800/80 border border-gray-700/80 text-white placeholder-gray-400 text-xs rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-[#FF1E36] transition-colors"
          />
          <button
            type="submit"
            className="absolute right-1.5 w-8 h-8 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Subscribe"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {status.type === 'error' && (
          <p className="text-xs text-red-400 font-medium pl-1">
            {status.message}
          </p>
        )}

        {status.type === 'success' && (
          <p className="text-xs text-emerald-400 font-medium pl-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
