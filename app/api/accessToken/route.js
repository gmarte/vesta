// pages/api/accessToken/route.ts

import { NextResponse } from "next/server";

export async function POST() {
    // Your logic to fetch the VESTA access token
    try {
        const response = await fetch('https://platform.vesta.io/api/accessToken', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(`${process.env.VESTA_NAME}:${process.env.VESTA_PASSWORD}`).toString('base64')}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching VESTA access token:', error);
        return NextResponse.json({ error: "Failed to fetch VESTA access token" });
    }
}
