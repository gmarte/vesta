// /app/api/evaluate/route.js

import { NextRequest, NextResponse } from "next/server";

export async function POST(req){   
    const body = {
        "uniqueCartId": "AIV90687S980SV",
        "orderNumber": "Lourdes",
        "customerOrderStatus": "COMPLETE",
        "totalAmount": {
          "amount": 75.24,
          "currencyCode": "USD"
        },
        "totalDiscount": {
          "amount": 12.24,
          "currencyCode": "USD"
        },
        "totalTaxAmount": {
          "amount": "12",
          "currencyCode": "USD"
        },
        "payments": {
          "creditCards": [
            {
              "binNumber": "452164",
              "lastFour": "1234",
              "accountNumberDigest": "0x058AE31vDCC32A6ED75F19B4B96B0E",
              "paymentId": "Y2Z6W3",
              "gateway": "Chase Paymentech",
              "billingAddress": {
                "firstName": "Lourdes",
                "lastName": "Testing2",
                "addressLine1": "1234 sw my st",
                "addressLine2": "",
                "unitNumber": "",
                "buildingNumber": "",
                "streetOrBlock": "",
                "neighborhood": "",
                "city": "Beaverton",
                "regionCode": "or",
                "postalCode": "97008",
                "countryCode": "US"
              },
              "amount": {
                "amount": 12.24,
                "currencyCode": "ARS"
              },
              "responseCodes": {
                "addressVerification": "M",
                "authorization": "21",
                "cardVerificationValue": "M"
              }
            }
          ]
        },
        "shipping": [
          {
            "deliveryMethod": "Mail",
            "carrier": "FedEx",
            "date": "2021-09-30",
            "class": "Ground",
            "amount": {
              "amount": 10.24,
              "currencyCode": "ARS"
            },
            "pickupLocation": "N/A",
            "pickupTime": "12:00 PM",
            "shippingAddress": {
              "firstName": "John3",
              "lastName": "Smith3",
              "addressLine1": "5400 SW Meadows Rd.",
              "addressLine2": "",
              "unitNumber": "500",
              "buildingNumber": "5400",
              "streetOrBlock": " SW Meadows Rd.",
              "neighborhood": "",
              "city": "Lake Oswego",
              "regionCode": "OR",
              "postalCode": "97035",
              "countryCode": "US"
            },
            "phoneNumber": "9898989898",
            "email": "454110280@vestaSandboxTest.com"
          }
        ],
        "transactionEvaluationStep": "OneStepPostAuth",
        "targetCustomerDomainName": "som3ething86else3.com",
        "productReference": "Guarantee"
      };
    
    const { accessToken, transactionID } = JSON.parse(await req.text());

    try {
        const response = await fetch(`https://platform.vesta.io/api/v1/transactions/sandbox/evaluate/${transactionID}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed Evaluate  VESTA:', error);
        return NextResponse.json({ error: "Failed Evaluate  VESTA" });
    }
}
