import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_EMAIL = "africawinks@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, contact, people, package: packageName } = body

    // Validate required fields
    if (!name || !email || !contact || !people || !packageName) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Africa Winks Travel <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject: "New Booking Request Received!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">New Booking Request</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #334155; margin-bottom: 15px;">Customer Details:</h3>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Contact:</strong> ${contact}</p>
              <p style="margin: 10px 0;"><strong>Number of People:</strong> ${people}</p>
              <p style="margin: 10px 0;"><strong>Package:</strong> ${packageName}</p>
            </div>
            <p style="color: #64748b;">Please follow up with the customer within 24 hours.</p>
          </div>
        </div>
      `,
    })

    await resend.emails.send({
      from: "Africa Winks Travel <onboarding@resend.dev>",
      to: email,
      subject: "Booking Request Confirmation - Africa Winks Travel",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">Thank You for Your Booking Request!</h2>
            <p style="color: #334155; font-size: 16px; margin-bottom: 20px;">Dear ${name},</p>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
              We have received your booking request with Africa Winks Travel. Our team is excited to help you plan your adventure!
            </p>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #334155; margin-bottom: 15px;">Your Request Details:</h3>
              <p style="margin: 10px 0;"><strong>Number of People:</strong> ${people}</p>
              <p style="margin: 10px 0;"><strong>Package:</strong> ${packageName}</p>
            </div>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
              Our team will review your request and get back to you within 24 hours at ${email}.
            </p>
            <p style="color: #64748b; line-height: 1.6;">
              If you have any urgent questions, feel free to reach out to us.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">Best regards,</p>
              <p style="color: #2563eb; font-weight: bold; margin: 5px 0;">Africa Winks Travel Team</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      {
        message: "Booking request submitted successfully! Check your email for confirmation.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Booking API Error:", error)
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 })
  }
}
