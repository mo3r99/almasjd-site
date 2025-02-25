const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   switch (req.method) {
//     case "POST":
//       try {
//         // Create Checkout Sessions from body params.
//         const session = await stripe.checkout.sessions.create({
//           ui_mode: "embedded",
//           line_items: [
//             {
//               // Provide the exact Price ID (for example, pr_1234) of
//               // the product you want to sell
//               price: "price_1QhEDCIUvYHPfkkGyjHU4onH",
//               quantity: 1,
//             },
//           ],
//           mode: "payment",
//           return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
//         });

//         res.send({ clientSecret: session.client_secret });
//       } catch (err) {
//         res.status(err.statusCode || 500).json(err.message);
//       }
//       break;
//     case "GET":
//       try {
//         const session = await stripe.checkout.sessions.retrieve(
//           req.query.session_id
//         );

//         res.send({
//           status: session.status,
//           customer_email: session.customer_details.email,
//         });
//       } catch (err) {
//         res.status(err.statusCode || 500).json(err.message);
//       }
//       break;
//     default:
//       res.setHeader("Allow", req.method);
//       res.status(405).end("Method Not Allowed");
//   }
// }

import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const sessionId = url.searchParams.get('session_id');
    
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details.email,
      customer_name: session.customer_details.name
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { origin } = new URL(req.url);

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      submit_type: 'donate',
      line_items: [
        {
          price: process.env.DONATE_PAYMENT,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
