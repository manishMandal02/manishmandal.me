import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { email, password, to, subject, html } = JSON.parse(req.body);

    if (!email || !password || !to || !subject || !html) {
      res.status(400).json({ success: false, message: 'Invalid data' });
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: email,
          pass: password,
        },
      });
      const info = await transporter.sendMail({
        subject,
        html,
        to,
        from: email,
      });

      console.log('🚀 ~ handler ~ info:', info);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: JSON.stringify(error) });
    }
  }
  res.status(404).json({ success: false, message: 'Method not supported' });
}
