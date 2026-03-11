/**
 * Contact Controller
 * Handles POST /api/contact
 */

const sendContact = (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  const errors = {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.email = 'Email is required.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = 'Invalid email address.';
    }
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    errors.message = 'Message is required.';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Log the message (in production you'd integrate email/DB here)
  console.log('\n📬 New Contact Message');
  console.log('─────────────────────────────');
  console.log(`Name    : ${name.trim()}`);
  console.log(`Email   : ${email.trim()}`);
  console.log(`Message : ${message.trim()}`);
  console.log(`Time    : ${new Date().toISOString()}`);
  console.log('─────────────────────────────\n');

  return res.status(200).json({
    success: true,
    message: 'Your message has been received. Sara will get back to you soon!',
  });
};

module.exports = { sendContact };
