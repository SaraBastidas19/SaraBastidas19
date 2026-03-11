const BASE_URL = process.env.REACT_APP_API_URL || '';

export const sendContactMessage = async ({ name, email, message }) => {
  const response = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Failed to send message');
  }

  return response.json();
};
