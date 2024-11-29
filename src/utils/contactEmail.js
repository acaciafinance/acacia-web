const nodemailer = require('nodemailer')

const sendContactEmail = async (name, email, phone, message) => {
    const htmlContent = `
    <body style="font-family: 'Poppins', Arial, sans-serif">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center" style="padding: 20px;">
                    <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                        <!-- Header -->
                        <tr>
                            <td class="header" style="background-color: #134e4a; padding: 40px; text-align: center; color: white; font-size: 24px;">
                            Message from ${name}
                            </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                            Hey, Femi! <br>
                            You have a new message from ${name}, ${email}. Find the content of the message below
                            <br><br>
                                ${message}     
                            </td>
                        </tr>

                        <!-- Call to action Button -->
                        <tr>
                            <td style="padding: 0px 40px 0px 40px; text-align: center;">
                                <!-- CTA Button -->
                                <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                    <tr>
                                        <td align="center" style="background-color: #345C72; padding: 10px 20px; border-radius: 5px;">
                                            <a href="tel:${phone}" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">Call ${name} on ${phone}</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                Please read and revert fast. <br>
                                Thank you!            
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                            Copyright &copy; 2024 | Quizzo
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    `;

    const htmlContentForUser = `
    <body style="font-family: 'Poppins', Arial, sans-serif">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center" style="padding: 20px;">
                    <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                        <!-- Header -->
                        <tr>
                            <td class="header" style="background-color: #134e4a; padding: 40px; text-align: center; color: white; font-size: 24px;">
                            Message Received!
                            </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                            Thank you, ${name}! <br> <br>
                            Thank you for reaching out to us! <br>
                            Your message has been received. An administrator will respond to you shortly through one of the contact methods you've provided.
                            <br><br>
                            If you do not receive a response within 30 minutes, please use the link below to send us a WhatsApp message, and we will respond promptly.          
                            </td>
                        </tr>

                        <!-- Call to action Button -->
                        <tr>
                            <td style="padding: 0px 40px 0px 40px; text-align: center;">
                                <!-- CTA Button -->
                                <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                    <tr>
                                        <td align="center" style="background-color: #345C72; padding: 10px 20px; border-radius: 5px;">
                                            <a href="https://wa.me/message/ETSQQU2AVQ5RK1" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">Send a Whatsapp message</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                          
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                            Copyright &copy; 2024 | Surge
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    `;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: '"Quizzo Talent"<talent@quizzo.ng>',
            to: "femzy14@gmail.com",
            subject: `New Message From ${name}`,
            html: htmlContent
        })

        await transporter.sendMail({
            from: '"Quizzo Talent"<talent@quizzo.ng>',
            to: email,
            subject: "We Have Received Your Email",
            html: htmlContentForUser
        })
    } catch (error) {
        // console.log("email not sent")
        console.log(error)
    }
}
export default sendContactEmail