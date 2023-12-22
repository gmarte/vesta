// lib/fetchAccessToken.ts

const fetchAccessToken = async () => {
    const res = await fetch('/api/accessToken', {
        method: "POST",
    });
    const data = await res.json();
    return data;
}

export default fetchAccessToken;
