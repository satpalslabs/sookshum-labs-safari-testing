import type { FormData } from '@components/contact-us/contact-form';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const data: FormData = await request.json();
  const transport = nodemailer.createTransport({
    // service: 'gmail',
    host: process.env.MAIL_DOMAIN,
    port: 465,
    secure: true,
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: `Project details <${data.email}>`,
    to: process.env.MY_EMAIL,
    subject: `Client Project Submission:  ${data.name}`,
    html: `<div>
          <div>Dear manager,</div>
          <div>I hope this email finds you well. Below are the details of a new client project submission:</div><br />
         <div style='font-size:17px'><b>Client Information</b></div>
         <div style='padding-left:10px'>
          <div><b>Name: </b>${data.name}</div>
           <div><b>Email: </b>${data.email} </div>
          <div><b>Phone no: </b>${data["phone-no"]}</div>
          <div><b>Project Details: </b><br />${data["project-details"]}</div>
          </div><br />
          <div>Please find the attached files related to this project for your review.</div> <br />
          <div>Best regards,</div>
          <div><b>Sookshum labs team</b></div>
          <img style="height:30px; margin-top:10px" src="https://www.sookshum-labs.com/header/Top-Nav-logo.svg" alt="Sookshum labs Logo">
          </div>`,
    attachments: data.files,

  };

  const sendMailPromise = async () => {
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent successfully');
        } else {
          reject(err.message);
        }
      });
    });
  }

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "We have received your email, Thanks!", status: 200, success: true });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}