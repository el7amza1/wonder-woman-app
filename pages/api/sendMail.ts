// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { renderUserMessage } from "../../mjml/userMessage";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { values } = req.body;
  const msg = {
    to: `marwanashrafzaki98@gmail.com`, // Change to your recipient
    from: "marwanashrafzaki98@gmail.com", // Change to your verified sender
    subject: `${values.firstName} sent a message`,
    html: `${renderUserMessage(
      values.firstName,
      values.lastName,
      values.email,
      values.phone,
      values.message
    )}`,
  };
  return sgMail
    .send(msg)
    .then(() => {
      return res.status(200).json("Message Sent");
    })
    .catch((error) => {
      return res.status(403).json(error);
    });
}
