'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

function validate(fields) {
  const errors = {};
  if (!fields.from_name.trim()) errors.from_name = 'Name is required.';
  else if (fields.from_name.trim().length < 2) errors.from_name = 'Name must be at least 2 characters.';

  if (!fields.from_email.trim()) {
    errors.from_email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email)) {
    errors.from_email = 'Please enter a valid email address.';
  }

  if (!fields.message.trim()) errors.message = 'Message is required.';
  else if (fields.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}

export default function ContactForm() {
  const formRef = useRef(null);
  const [fields, setFields] = useState({ from_name: '', from_email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change if field was touched
    if (touched[name]) {
      const newErrors = validate({ ...fields, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ from_name: true, from_email: true, message: true });

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrors({});

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setFields({ from_name: '', from_email: '', message: '' });
      setTouched({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={fields.from_name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="John Smith"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.from_name ? 'from_name-error' : undefined}
          aria-invalid={!!errors.from_name}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 ${
            errors.from_name
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200 bg-gray-50 hover:border-gray-300'
          }`}
        />
        {errors.from_name && (
          <p id="from_name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.from_name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={fields.from_email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="john@company.com"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.from_email ? 'from_email-error' : undefined}
          aria-invalid={!!errors.from_email}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 ${
            errors.from_email
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200 bg-gray-50 hover:border-gray-300'
          }`}
        />
        {errors.from_email && (
          <p id="from_email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.from_email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us about your business and goals..."
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 resize-none ${
            errors.message
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200 bg-gray-50 hover:border-gray-300'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Success message */}
      {status === 'success' && (
        <div
          className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-4 py-3.5 text-sm animate-fade-in"
          role="status"
          aria-live="polite"
        >
          <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-emerald-700 mt-0.5">Thanks for reaching out — we'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div
          className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-3.5 text-sm animate-fade-in"
          role="alert"
          aria-live="assertive"
        >
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold">Something went wrong.</p>
            <p className="text-red-700 mt-0.5">Please try again or email us directly at <strong>hello@adcheckup.com</strong></p>
          </div>
        </div>
      )}
    </form>
  );
}
