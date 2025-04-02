const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import { formatAmount } from '@/app/lib/formatAmount';
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

    const { type, amount, email, address, mode, name } = await req.json();
    
    //console.log(type, amount, email, address, mode);

    let des;
    if (type == 'donation') {
      des = 'Donation to Al Masjid';
    }

    let description = des;
    if (type == 'donation' && address) {
      description = `Support Al Masjid - Gift Aid Eligible - £${formatAmount(amount)} - ${name}`;
    } else if (type == 'donation' && !address) {
      description = `Support Al Masjid - £${formatAmount(amount)} - ${name}`;
    }

    const session = await stripe.paymentIntents.create({
      amount: amount*100,
      currency: 'gbp',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        'Type': des,
        'Gift Aid': address ? 'Eligible' : 'Not Eligible',
        'Address': address ? `${address.houseNumber}, ${address.street}, ${address.city}, ${address.postcode}` : 'Not Provided',
      },
      description,
      receipt_email: email,
    }); 
    
    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
