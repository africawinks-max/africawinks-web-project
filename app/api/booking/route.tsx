import { NextResponse } from "next/server"
import { Resend } from "resend"
import EmailTemplate from "@/components/EmailTemplate";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

export async function POST(request: Request) {
  const html = render(
    <EmailTemplate firstName="John" />
  );
  try {
    const body = await request.json()
    const { name, email, contact, people, package: packageName } = body

    // Validate required fields
    if (!name || !email || !contact || !people || !packageName) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send(({
    from: "Africawinks <hello@africawinks.co.za>",
    to: "africawinks@gmail.com",
    subject: "Welcome to Africawinks 👣",
    react: <EmailTemplate firstName="John" />,
  }));

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 });
    }

    // const { data, error } = await resend.emails.send({
    //   from: "Africa Winks Travel <admin@africawinks.co.za>",
    //   to: ADMIN_EMAIL,
    //   subject: "🚀 New Booking Request Received!",
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <meta charset="utf-8">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     </head>
    //     <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #93693a 0%, #f1ede8fa 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    //       <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
    //         <tr>
    //           <td align="center">
    //             <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
    //               <!-- Header with Logo -->
    //               <tr>
    //                 <td style="background: linear-gradient(135deg, #754e21ff 0%, #977f63ff 100%); padding: 50px 40px; text-align: center; position: relative;">
    //                   <div style="background: rgba(255, 255, 255, 0.1); width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 20px; backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; border: 4px solid rgba(255, 255, 255, 0.2);">
    //                     <img src="https://www.africawinks.co.za/logo-sample.jpg" alt="Africa Winks Travel" style="width: 120px; height: 120px;  border-radius: 50%; object-fit: contain;" />
    //                   </div>
    //                   <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);">New Booking Alert!</h1>
    //                   <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px;">🎉 Exciting news from your travel platform</p>
    //                 </td>
    //               </tr>
                  
    //               <!-- Content -->
    //               <tr>
    //                 <td style="padding: 40px;">
    //                   <div style="background: linear-gradient(135deg, #f6f8fb 0%, #e9ecf5 100%); border-radius: 16px; padding: 30px; border: 2px solid #e0e7ff; margin-bottom: 30px;">
    //                     <h2 style="margin: 0 0 20px; color: #1e293b; font-size: 22px; font-weight: 700;">Customer Details</h2>
    //                     <table width="100%" cellpadding="0" cellspacing="0">
    //                       <tr>
    //                         <td style="padding: 12px 0; border-bottom: 1px solid #cbd5e1;">
    //                           <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
    //                           <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${name}</p>
    //                         </td>
    //                       </tr>
    //                       <tr>
    //                         <td style="padding: 12px 0; border-bottom: 1px solid #cbd5e1;">
    //                           <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
    //                           <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${email}</p>
    //                         </td>
    //                       </tr>
    //                       <tr>
    //                         <td style="padding: 12px 0; border-bottom: 1px solid #cbd5e1;">
    //                           <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact</span>
    //                           <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${contact}</p>
    //                         </td>
    //                       </tr>
    //                       <tr>
    //                         <td style="padding: 12px 0; border-bottom: 1px solid #cbd5e1;">
    //                           <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Number of People</span>
    //                           <p style="margin: 5px 0 0; color: #1e293b; font-size: 16px; font-weight: 600;">${people}</p>
    //                         </td>
    //                       </tr>
    //                       <tr>
    //                         <td style="padding: 12px 0;">
    //                           <span style="color: #64748b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Package</span>
    //                           <p style="margin: 5px 0 0; color: #1e293b; font-size: 18px; font-weight: 700;">${packageName}</p>
    //                         </td>
    //                       </tr>
    //                     </table>
    //                   </div>
                      
    //                   <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 20px; border-left: 4px solid #f59e0b;">
    //                     <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6;">⚡ <strong>Action Required:</strong> Please follow up with the customer within 24 hours to confirm their booking and discuss the travel details.</p>
    //                   </div>
    //                 </td>
    //               </tr>
                  
    //               <!-- Footer -->
    //               <tr>
    //                 <td style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    //                   <p style="margin: 0 0 10px; color: #64748b; font-size: 14px; line-height: 1.6;">This is an automated notification from your booking system</p>
    //                   <p style="margin: 0; color: #94a3b8; font-size: 12px;">© 2025 Africa Winks Tours. All rights reserved.</p>
    //                 </td>
    //               </tr>
    //             </table>
    //           </td>
    //         </tr>
    //       </table>
    //     </body>
    //     </html>
    //   `,
    // })

    // if (error) {
    //   console.error("Booking API Error from Admin:", error)
    // } else {
      
    //   console.log("Email was sent successfull to: ", {ADMIN_EMAIL})
    
    // }

    // const customEmail = await resend.emails.send({
    //   from: "Africa Winks Travel <hello@africawinks.co.za>",
    //   to: email,
    //   subject: "✨ Your Adventure Awaits - Booking Confirmation",
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <meta charset="utf-8">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     </head>
    //     <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #93693a 0%, #f1ede8fa 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    //       <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
    //         <tr>
    //           <td align="center">
    //             <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
    //               <!-- Hero Header -->
    //               <tr>
    //                 <td style="background: linear-gradient(135deg, #754e21ff 0%, #977f63ff 100%); padding: 50px 40px; text-align: center; position: relative;">
    //                   <div style="background: rgba(255, 255, 255, 0.1); width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 20px; backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; border: 4px solid rgba(255, 255, 255, 0.2);">
    //                     <img src="https://www.africawinks.co.za/logo-sample.jpg" alt="Africa Winks Travel" style="width: 120px; border-radius: 50%; height: 120px; object-fit: contain;" />
    //                   </div>
    //                   <h1 style="margin: 0; color: #ffffff; font-size: 36px; font-weight: 800; letter-spacing: -0.5px; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);">Your Adventure Awaits!</h1>
    //                   <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 18px;">✨ Get ready for an unforgettable journey</p>
    //                 </td>
    //               </tr>
                  
    //               <!-- Greeting -->
    //               <tr>
    //                 <td style="padding: 40px 40px 20px;">
    //                   <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 24px; font-weight: 700;">Hello ${name}! 👋</h2>
    //                   <p style="margin: 0; color: #475569; font-size: 16px; line-height: 1.7;">Thank you for choosing <strong style="color: #667eea;">Africa Winks Travel</strong> for your next adventure! We're thrilled to help you create unforgettable memories.</p>
    //                 </td>
    //               </tr>
                  
    //               <!-- Booking Details Card -->
    //               <tr>
    //                 <td style="padding: 0 40px 40px;">
    //                   <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 16px; padding: 30px; border: 2px solid #bae6fd;">
    //                     <div style="text-align: center; margin-bottom: 25px;">
    //                       <div style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 20px; border-radius: 20px; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Booking Request Received</div>
    //                     </div>
                        
    //                     <h3 style="margin: 0 0 20px; color: #0c4a6e; font-size: 20px; font-weight: 700; text-align: center;">Your Request Details</h3>
                        
    //                     <table width="100%" cellpadding="0" cellspacing="0">
    //                       <tr>
    //                         <td style="padding: 12px 0; border-bottom: 1px solid #bae6fd;">
    //                           <span style="color: #0369a1; font-size: 14px; font-weight: 600;">Package Selected</span>
    //                           <p style="margin: 5px 0 0; color: #0c4a6e; font-size: 18px; font-weight: 700;">${packageName}</p>
    //                         </td>
    //                       </tr>
    //                       <tr>
    //                         <td style="padding: 12px 0;">
    //                           <span style="color: #0369a1; font-size: 14px; font-weight: 600;">Number of Travelers</span>
    //                           <p style="margin: 5px 0 0; color: #0c4a6e; font-size: 18px; font-weight: 700;">${people}</p>
    //                         </td>
    //                       </tr>
    //                     </table>
    //                   </div>
    //                 </td>
    //               </tr>
                  
    //               <!-- What's Next Section -->
    //               <tr>
    //                 <td style="padding: 0 40px 40px;">
    //                   <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 16px; padding: 25px; border-left: 4px solid #f59e0b;">
    //                     <h3 style="margin: 0 0 15px; color: #92400e; font-size: 18px; font-weight: 700;">🎯 What Happens Next?</h3>
    //                     <ol style="margin: 0; padding-left: 20px; color: #92400e; font-size: 14px; line-height: 1.8;">
    //                       <li style="margin-bottom: 8px;">Our travel experts will review your request</li>
    //                       <li style="margin-bottom: 8px;">We'll reach out to you within <strong>24 hours</strong> at ${ADMIN_EMAIL}</li>
    //                       <li style="margin-bottom: 8px;">We'll discuss your itinerary and customize your experience</li>
    //                       <li>Get ready to embark on your dream adventure!</li>
    //                     </ol>
    //                   </div>
    //                 </td>
    //               </tr>
                  
    //               <!-- CTA Section -->
    //               <tr>
    //                 <td style="padding: 0 40px 40px; text-align: center;">
    //                   <p style="margin: 0 0 20px; color: #64748b; font-size: 14px; line-height: 1.6;">Questions? We're here to help!</p>
    //                   <a href="mailto:africawinks@gmail.com" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 14px 32px; border-radius: 30px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); letter-spacing: 0.5px;">Contact Us</a>
    //                 </td>
    //               </tr>
                  
    //               <!-- Footer -->
    //               <tr>
    //                 <td style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    //                   <p style="margin: 0 0 5px; color: #475569; font-size: 14px; font-weight: 600;">Safe adventure,</p>
    //                   <p style="margin: 0 0 15px; color: #93693a; font-size: 16px; font-weight: 700;">The Africa Winks Tours Team</p>
    //                   <div style="margin: 20px 0; height: 1px; background: #e2e8f0;"></div>
    //                   <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5;">© 2025 Africa Winks Travel. All rights reserved.<br/>Your adventure partner for unforgettable experiences.</p>
    //                 </td>
    //               </tr>
    //             </table>
    //           </td>
    //         </tr>
    //       </table>
    //     </body>
    //     </html>
    //   `,
    // })

    // if (customEmail.error) {
    //   console.error("Booking API Error from Admin:", error)
    // }  else {
      
    //   console.log("Email was sent successfull to: ", {email})
    
    // }

    
    

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
