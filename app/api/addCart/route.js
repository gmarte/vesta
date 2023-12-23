// /app/api/addCart/route.js

import { NextRequest, NextResponse } from "next/server";

export async function POST(req){   
    const body = {
        uniqueCartId: "AIV90687S980SV",
        productCode: "98101003",
        productDescription: "Juguete para gato",
        productType: "Physical",
        quantity: "1",
        amount: {
          amount: 61.2,
          currencyCode: "ARS"
        },
        discount: {
          amount: 0,
          currencyCode: "ARS"
        },
        isGiftCard: "false",
        eventType: "add"
    };
    
    const { accessToken, transactionID } = JSON.parse(await req.text());

    try {
        const response = await fetch(`https://platform.vesta.io/api/v1/transactions/sandbox/${transactionID}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error adding to cart VESTA:', error);
        return NextResponse.json({ error: "Failed adding to cart VESTA" });
    }
}
