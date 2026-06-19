import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().min(2, 'Please enter a company name.'),
  message: z.string().min(10, 'Please enter a message.'),
});
