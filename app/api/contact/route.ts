import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_EMAIL = "africawinks@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email to admin
    await resend.emails.send({
      from: "Africa Winks Travel <inquiry@africawinks.co.za>",
      to: ADMIN_EMAIL,
      subject: `💬 New Contact Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #93693a 0%, #f1ede8fa 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center;">
                      <div style="background: rgba(255, 255, 255, 0.1); width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 20px; backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; border: 3px solid rgba(255, 255, 255, 0.2);">
                        <span style="font-size: 48px;">💬</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -0.5px;">New Contact Message</h1>
                      <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px;">Someone wants to connect with you!</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <div style="background: linear-gradient(135deg, #f6f8fb 0%, #e9ecf5 100%); border-radius: 16px; padding: 30px; border: 2px solid #e0e7ff; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 20px; color: #1e293b; font-size: 22px; font-weight: 700;">Contact Details</h2>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #cbd5e1;">
                              <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                              <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #cbd5e1;">
                              <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                              <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0;">
                              <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                              <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></p>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <div style="background: #ffffff; border-radius: 16px; padding: 25px; border: 2px solid #e0e7ff;">
                        <h3 style="margin: 0 0 15px; color: #1e293b; font-size: 18px; font-weight: 700;">📝 Message</h3>
                        <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 10px; color: #64748b; font-size: 14px;">This is an automated notification from your contact form</p>
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">© 2025 Africa Winks Travel. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "Africa Winks Travel <admin@africawinks.co.za>",
      to: email,
      subject: "✨ We Received Your Message - Africa Winks Travel",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #93693a 0%, #f1ede8fa 100%); padding: 50px 40px; text-align: center;">
                      <div style="background: rgba(255, 255, 255, 0.1); width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 20px; backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; border: 4px solid rgba(255, 255, 255, 0.2);">
                        <span style="font-size: 60px;">✨</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 36px; font-weight: 800; letter-spacing: -0.5px;">Thank You!</h1>
                      <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 18px;">We've received your message</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 24px; font-weight: 700;">Hello ${name}! 👋</h2>
                      <p style="margin: 0 0 20px; color: #475569; font-size: 16px; line-height: 1.7;">Thank you for reaching out to <strong style="color: #667eea;">Africa Winks Travel</strong>. We're excited to help you plan your next adventure!</p>
                      
                      <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 16px; padding: 25px; border: 2px solid #bae6fd; margin: 25px 0;">
                        <h3 style="margin: 0 0 15px; color: #0c4a6e; font-size: 18px; font-weight: 700;">🎯 What's Next?</h3>
                        <ul style="margin: 0; padding-left: 20px; color: #0369a1; font-size: 15px; line-height: 1.8;">
                          <li style="margin-bottom: 8px;">Our team is reviewing your message</li>
                          <li style="margin-bottom: 8px;">We'll get back to you within <strong>24 hours</strong></li>
                          <li>In the meantime, explore our travel packages on our website</li>
                        </ul>
                      </div>
                      
                      <div style="background: #ffffff; border-radius: 12px; padding: 20px; border: 2px solid #e0e7ff;">
                        <p style="margin: 0 0 10px; color: #64748b; font-size: 14px; font-weight: 600;">Your message:</p>
                        <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6; font-style: italic; white-space: pre-wrap;">"${message}"</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- CTA -->
                  <tr>
                    <td style="padding: 0 40px 40px; text-align: center;">
                      <p style="margin: 0 0 20px; color: #64748b; font-size: 14px;">Need immediate assistance?</p>
                      <a href="mailto:africawinks@gmail.com" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 14px 32px; border-radius: 30px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">Contact Us Directly</a>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 5px; color: #475569; font-size: 14px; font-weight: 600;">Best regards,</p>
                      <p style="margin: 0 0 15px; color: #667eea; font-size: 16px; font-weight: 700;">The Africa Winks Travel Team</p>
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">© 2025 Africa Winks Travel. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      {
        message: "Thank you for contacting us! We'll get back to you within 24 hours.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
