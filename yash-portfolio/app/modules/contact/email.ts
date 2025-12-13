import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendThankYouEmail(to: string, name: string) {
    const year = new Date().getFullYear();
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Yash Sachdev</title>
    </head>
    <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#667eea;padding:40px 20px;">
            <tr>
                <td align="center">
                    <!-- Main Container -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);overflow:hidden;">
                        
                        <!-- Header with Gradient -->
                        <tr>
                            <td style="background:linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);padding:50px 40px;text-align:center;">
                                <!-- Logo Circle -->
                                <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto 24px auto;">
                                    <tr>
                                        <td style="width:90px;height:90px;background:#ffffff;border-radius:50%;text-align:center;vertical-align:middle;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
                                            <span style="font-size:40px;font-weight:bold;color:#06b6d4;line-height:90px;display:block;">YS</span>
                                        </td>
                                    </tr>
                                </table>
                                <h1 style="color:#ffffff;font-size:32px;margin:0;font-weight:700;letter-spacing:-0.5px;">Thank You for Reaching Out!</h1>
                            </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                            <td style="padding:40px 40px 30px 40px;">
                                <!-- Greeting -->
                                <p style="color:#1f2937;font-size:20px;margin:0 0 10px 0;font-weight:600;">Hi ${name},</p>
                                
                                <!-- Message -->
                                <p style="color:#4b5563;font-size:16px;line-height:1.7;margin:0 0 20px 0;">
                                    Thank you for taking the time to reach out to me through my portfolio website. I truly appreciate your interest and have successfully received your message.
                                </p>
                                
                                <p style="color:#4b5563;font-size:16px;line-height:1.7;margin:0 0 25px 0;">
                                    I make it a priority to respond to all inquiries within <strong style="color:#06b6d4;">24-48 hours</strong>. I'll review your message carefully and get back to you with a thoughtful response as soon as possible.
                                </p>

                                <!-- Info Box -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ecfeff;border-left:4px solid #06b6d4;border-radius:8px;margin:0 0 30px 0;">
                                    <tr>
                                        <td style="padding:20px;">
                                            <p style="color:#0e7490;font-size:15px;margin:0 0 8px 0;font-weight:600;">
                                                📧 Need a faster response?
                                            </p>
                                            <p style="color:#0e7490;font-size:14px;line-height:1.6;margin:0;">
                                                If your inquiry is urgent, feel free to reply directly to this email, and I'll prioritize your message.
                                            </p>
                                        </td>
                                    </tr>
                                </table>

                                <!-- CTA Button -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 30px 0;">
                                    <tr>
                                        <td align="center">
                                            <table cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="background:linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);border-radius:8px;box-shadow:0 4px 12px rgba(6,182,212,0.3);">
                                                        <a href="https://yashsachdev.com" style="display:block;padding:16px 40px;color:#ffffff;text-decoration:none;font-size:16px;font-weight:600;">
                                                            Visit My Portfolio
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Connect Section -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f9fafb;border-radius:8px;padding:20px;margin:0 0 25px 0;">
                                    <tr>
                                        <td>
                                            <p style="color:#374151;font-size:15px;margin:0 0 15px 0;font-weight:600;">Connect with me:</p>
                                            <table cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <!-- LinkedIn -->
                                                    <td style="padding-right:15px;">
                                                        <a href="https://www.linkedin.com/in/yash-sachdev-08274a229/" style="display:block;width:36px;height:36px;background:#0077b5;border-radius:6px;text-align:center;text-decoration:none;">
                                                            <span style="color:#ffffff;font-size:18px;font-weight:bold;line-height:36px;display:block;">in</span>
                                                        </a>
                                                    </td>
                                                    <!-- GitHub -->
                                                    <td style="padding-right:15px;">
                                                        <a href="https://github.com/sachdevyash123" style="display:block;width:36px;height:36px;background:#333333;border-radius:6px;text-align:center;text-decoration:none;">
                                                            <span style="color:#ffffff;font-size:18px;font-weight:bold;line-height:36px;display:block;">GH</span>
                                                        </a>
                                                    </td>
                                                    <!-- Email -->
                                                    <td>
                                                        <a href="mailto:sachdevyash2002@gmail.com" style="display:block;width:36px;height:36px;background:#ea4335;border-radius:6px;text-align:center;text-decoration:none;">
                                                            <span style="color:#ffffff;font-size:18px;font-weight:bold;line-height:36px;display:block;">@</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Signature -->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:2px solid #e5e7eb;padding-top:20px;margin-top:20px;">
                                    <tr>
                                        <td>
                                            <p style="color:#6b7280;font-size:14px;margin:0 0 4px 0;">Best regards,</p>
                                            <p style="color:#1f2937;font-size:18px;font-weight:700;margin:0 0 4px 0;">Yash Sachdev</p>
                                            <p style="color:#6b7280;font-size:14px;margin:0;">Software Engineer | Full Stack Developer</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="background:#f9fafb;padding:30px 40px;text-align:center;border-top:1px solid #e5e7eb;">
                                <p style="color:#9ca3af;font-size:12px;line-height:1.6;margin:0 0 8px 0;">
                                    This email was sent in response to your inquiry through my portfolio website.<br>
                                    Ahmedabad, Gujarat, India
                                </p>
                                <p style="color:#9ca3af;font-size:12px;margin:0;">
                                    © ${year} Yash Sachdev. All rights reserved.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;

    const text = `Hi ${name},

Thank you for reaching out! I appreciate your interest and have successfully received your message through my portfolio website.

I make it a priority to respond to all inquiries within 24-48 hours. I'll review your message carefully and get back to you with a thoughtful response as soon as possible.

📧 Need a faster response?
If your inquiry is urgent, feel free to reply directly to this email, and I'll prioritize your message.

Visit My Portfolio: https://yashsachdev.com

Connect with me:
- LinkedIn: https://www.linkedin.com/in/yash-sachdev-08274a229/
- GitHub: https://github.com/sachdevyash123
- Email: sachdevyash2002@gmail.com

Best regards,
Yash Sachdev
Software Engineer | Full Stack Developer

---
This email was sent in response to your inquiry through my portfolio website.
Ahmedabad, Gujarat, India

© ${year} Yash Sachdev. All rights reserved.`;

    await sgMail.send({
        to,
        from: process.env.FROM_EMAIL!,
        subject: "Thank you for contacting Yash Sachdev! 🚀",
        text,
        html,
    });
}