import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface AppointmentRequest {
    service: string
    date: string
    time: string
    name: string
    email?: string
    phone: string
    address: string
    message?: string
}

export async function POST(request: NextRequest) {
    try {
        const body: AppointmentRequest = await request.json()
        
        // Validate required fields (email is optional, address is required)
        if (!body.service || !body.date || !body.time || !body.name || !body.phone || !body.address) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        // Service details mapping
        const serviceDetails: Record<string, { name: string; duration: string; price: string }> = {
            'essential': {
                name: 'Essential Clean',
                duration: '2 hours',
                price: 'Starting at $150'
            },
            'signature': {
                name: 'Signature Clean',
                duration: '3 hours',
                price: 'Starting at $210'
            },
            'deep': {
                name: 'Deep Clean',
                duration: '4 hours',
                price: 'Starting at $300'
            }
        }

        const selectedService = serviceDetails[body.service] || { name: body.service, duration: 'N/A', price: 'N/A' }

        // Format date and time
        const appointmentDate = new Date(body.date)
        const formattedDate = appointmentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })

        // Email content
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #0a192f; color: #d4af37; padding: 20px; text-align: center; }
                    .content { background-color: #fcfcfc; padding: 30px; border: 1px solid #e0e0e0; }
                    .info-row { margin: 15px 0; padding: 10px; background-color: #f5f5f5; border-left: 3px solid #d4af37; }
                    .label { font-weight: bold; color: #0a192f; }
                    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; text-align: center; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Appointment Request</h1>
                        <p>Luxuria Pure Cleaning</p>
                    </div>
                    <div class="content">
                        <h2>Appointment Details</h2>
                        
                        <div class="info-row">
                            <span class="label">Service:</span> ${selectedService.name}
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Duration:</span> ${selectedService.duration}
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Price Range:</span> ${selectedService.price}
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Date:</span> ${formattedDate}
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Time:</span> ${body.time}
                        </div>
                        
                        <h2 style="margin-top: 30px;">Contact Information</h2>
                        
                        <div class="info-row">
                            <span class="label">Name:</span> ${body.name}
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Phone:</span> ${body.phone}
                        </div>
                        
                        <div class="info-row">
                            <span class="label">Full Address:</span><br>
                            ${body.address.replace(/\n/g, '<br>')}
                        </div>
                        
                        ${body.email ? `
                        <div class="info-row">
                            <span class="label">Email:</span> ${body.email}
                        </div>
                        ` : ''}
                        
                        ${body.message ? `
                        <div class="info-row">
                            <span class="label">Additional Message:</span><br>
                            ${body.message}
                        </div>
                        ` : ''}
                    </div>
                    <div class="footer">
                        <p>This is an automated message from the Luxuria Pure Cleaning appointment system.</p>
                    </div>
                </div>
            </body>
            </html>
        `

        const emailText = `
New Appointment Request - Luxuria Pure Cleaning

Appointment Details:
- Service: ${selectedService.name}
- Duration: ${selectedService.duration}
- Price Range: ${selectedService.price}
- Date: ${formattedDate}
- Time: ${body.time}

Contact Information:
- Name: ${body.name}
- Phone: ${body.phone}
- Full Address: ${body.address}
${body.email ? `- Email: ${body.email}` : ''}
${body.message ? `\nAdditional Message:\n${body.message}` : ''}
        `

        // Prepare email options
        const mailOptions: any = {
            from: `"Luxuria Pure Cleaning" <${process.env.SMTP_FROM}>`,
            to: process.env.SMTP_TO,
            replyTo: body.email || process.env.SMTP_FROM || '',
            subject: `New Appointment Request: ${selectedService.name} on ${formattedDate}`,
            text: emailText,
            html: emailHtml,
        }

        // Add CC if configured
        if (process.env.SMTP_TO_CC) {
            mailOptions.cc = process.env.SMTP_TO_CC
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { message: 'Appointment request sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send appointment request. Please try again later.' },
            { status: 500 }
        )
    }
}
