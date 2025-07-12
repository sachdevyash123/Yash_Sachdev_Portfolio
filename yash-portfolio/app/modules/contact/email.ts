import sgMail from '@sendgrid/mail';
console.log(process.env.SENDGRID_API_KEY!)
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendThankYouEmail(to: string, name: string) {
    const year = new Date().getFullYear();
    const html = `
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f8fb;padding:0;margin:0;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06);margin:32px 0;">
            <tr>
              <td style="padding:32px 32px 16px 32px;text-align:center;">
                <h2 style="color:#2563eb;font-size:28px;margin:0 0 8px 0;font-family:sans-serif;">Thank You for Reaching Out!</h2>
                <p style="color:#222;font-size:18px;margin:0 0 16px 0;font-family:sans-serif;">Hi ${name},</p>
                <p style="color:#444;font-size:16px;line-height:1.6;margin:0 0 24px 0;font-family:sans-serif;">
                  I appreciate you contacting me through my portfolio. I have received your message and will get back to you as soon as possible.<br><br>
                  If your inquiry is urgent, feel free to reply to this email.
                </p>
                <div style="margin:24px 0;">
                  <a href="https://yashsachdev.com" style="display:inline-block;padding:12px 28px;background:#2563eb;color:#fff;border-radius:6px;text-decoration:none;font-size:16px;font-family:sans-serif;">Visit My Portfolio</a>
                </div>
                <p style="color:#888;font-size:14px;margin:0;font-family:sans-serif;">
                  Best regards,<br>
                  <b>Yash Sachdev</b>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 24px 32px;text-align:center;">
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;">
                <p style="color:#b0b0b0;font-size:12px;margin:0;font-family:sans-serif;">
                  © ${year} Yash Sachdev. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
    const text = `Hi ${name},\n\nThank you for reaching out! I appreciate your message and will get back to you as soon as possible.\n\nBest regards,\nYash Sachdev`;
    console.log("TO",to)
    console.log("From:",process.env.FROM_EMAIL)
    await sgMail.send({
        to,
        from: process.env.FROM_EMAIL!,
        subject: "Thank you for contacting Yash Sachdev!",
        text,
        html,
    });
}