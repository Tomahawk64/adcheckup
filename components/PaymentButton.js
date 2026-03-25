'use client';

/**
 * PaymentButton — Razorpay client-side integration.
 *
 * ⚠️  This is a client-side only integration and not secure for production payments.
 *     No order_id is created because there is no backend server.
 *     This approach is valid in Razorpay TEST MODE only.
 *     Never include your Razorpay Secret Key in frontend code.
 */

import { useState } from 'react';

// Replace with your actual Razorpay Test Key ID (starts with rzp_test_)
// The Secret Key must NEVER appear here — only the Key ID is safe for the browser.
const RAZORPAY_KEY_ID = 'rzp_test_SVVU9qRyec0rdR';

/** Dynamically injects the Razorpay checkout script only when needed. */
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }
    // Script already loaded — resolve immediately
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * @param {object} props
 * @param {number}  [props.amount=50000]       Amount in paise (50000 = ₹500)
 * @param {string}  [props.currency='INR']
 * @param {string}  [props.name='AdCheckup']   Brand name shown in checkout modal
 * @param {string}  [props.description]        Payment description
 * @param {string}  [props.prefillName]        Pre-fill customer name
 * @param {string}  [props.prefillEmail]       Pre-fill customer email
 * @param {string}  [props.buttonLabel]        Button text
 * @param {string}  [props.buttonClassName]    Override button classes
 */
export default function PaymentButton({
  amount = 50000,
  currency = 'INR',
  name = 'AdCheckup',
  description = 'Digital Marketing Services',
  prefillName = '',
  prefillEmail = '',
  buttonLabel = 'Pay Now',
  buttonClassName,
}) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const loaded = await loadRazorpayScript();

    if (!loaded) {
      alert('Failed to load Razorpay checkout. Please check your internet connection and try again.');
      setLoading(false);
      return;
    }

    const options = {
      // Only the Key ID goes here — the Secret Key must stay on a secure backend.
      key: RAZORPAY_KEY_ID,
      amount,       // paise
      currency,
      name,
      description,
      // order_id is intentionally omitted — Razorpay allows this in test mode
      // without a backend. Do NOT omit order_id in production.
      handler(response) {
        // Success callback
        console.log('Payment successful:', {
          payment_id: response.razorpay_payment_id,
          // razorpay_signature is only returned when an order_id is used
          signature: response.razorpay_signature ?? 'N/A (no order_id in test mode)',
        });
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: prefillName,
        email: prefillEmail,
      },
      theme: {
        color: '#10b981',
      },
      modal: {
        ondismiss() {
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on('payment.failed', (response) => {
      console.error('Payment failed:', response.error);
      alert(`Payment Failed\n${response.error.description}`);
      setLoading(false);
    });

    rzp.open();
    // setLoading(false) is handled by modal.ondismiss and payment.failed;
    // on success the modal closes automatically.
  };

  const defaultClass =
    'inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:bg-emerald-600 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  return (
    <button
      type="button"
      onClick={handlePayment}
      disabled={loading}
      className={buttonClassName ?? defaultClass}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Processing…
        </>
      ) : (
        <>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          {buttonLabel}
        </>
      )}
    </button>
  );
}
