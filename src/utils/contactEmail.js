const nodemailer = require('nodemailer')

const sendContactEmail = async (name, email, message, subject, logoUrl) => {
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
                            Hello! <br>
                            You have a new message from ${name}, ${email}. Find the content of the message below
                            <br><br>
                                ${message}     
                            </td>
                        </tr>

                        <!-- Call to action Button -->
                        
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                Please read and revert fast. <br>
                                Thank you!            
                            </td>
                        </tr>
                        <!-- Footer -->
                            <tr>
                                <td style="background-color: #333333; color: white; font-size: 14px; padding: 20px; text-align: center;">
                                    <img src="${logoUrl}" alt="Acacia" style="max-width: 100px; margin-bottom: 10px;" /><br />
                                    Copyright &copy; 2024
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
                                <td style="background-color: #1d4645; color: white; font-size: 24px; padding: 20px; text-align: center;">
                                    <img src="${logoUrl}" alt="Acacia" style="max-width: 150px;" />
                                </td>
                            </tr>

                        <!-- Body -->
                        <tr>
                            <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                            Thank you, ${name}! <br> <br>
                            Thank you for reaching out to us! <br>
                            Your message has been received. An administrator will respond to you shortly through one of the contact methods you've provided.
                            <br><br>
                                     
                            </td>
                        </tr>

                        <!-- Call to action Button -->
                        
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
            from: '"ACACIA Support"<info@acaciafinance.net>',
            to: "femi@acaciafinance.net",
            subject: subject,
            html: htmlContent
        })

        await transporter.sendMail({
            from: '"ACACIA Support"<info@acaciafinance.net>',
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