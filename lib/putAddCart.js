// lib/putAddCart.ts

const putAddCart = async (accessToken, transactionID) => {

    const body = {
        accessToken,
        transactionID,        
    };
    const res = await fetch('/api/addCart', {
        method: "POST",        
        body: JSON.stringify(body)
    });
    const data = await res.json();
    return data;
}

export default putAddCart;
