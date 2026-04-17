import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export async function POST(req: Request) {
  const body = await req.json();

  const { cart, total, email } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const items = cart
      .map(
        (item: CartItem) =>
          `${item.name} x${item.quantity} - ${item.price * item.quantity} FCFA`
      )
      .join("\n");

    await transporter.sendMail({
      from: `"Coffee Shop ☕" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Confirmation de commande ☕",
      text: `
Merci pour votre commande !
Le montant total de ${total} FCFA se fera à la livraison. 💸
🧾 Détails :
${items}

💰 Total : ${total} FCFA

Votre commande est en préparation ☕🔥
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}