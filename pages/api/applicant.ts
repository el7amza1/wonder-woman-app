// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { html } from "../../mjml/template";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { values } = req.body;

  const msg = {
    to: `${values.email}`, // Change to your recipient
    from: "marwanashrafzaki98@gmail.com", // Change to your verified sender
    subject: `Thanks for applying!`,
    text: "Thanks for applying!",
    html: `${html}`,
  };

  const msg2 = {
    to: `marwanashrafzaki98@gmail.com`, // Change to your recipient
    from: "marwanashrafzaki98@gmail.com", // Change to your verified sender
    subject: `New Applicant`,
    text: "New Applicant",
    attachments: [
      {
        content: values.pdf,
        filename: `${values.firstName}-${values.lastName}.pdf`,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  sgMail.send(msg2);

  return sgMail
    .send(msg)
    .then(() => {
      return res.status(200).json("Message Sent");
    })
    .catch((error) => {
      return res.status(403).json(error);
    });
}
