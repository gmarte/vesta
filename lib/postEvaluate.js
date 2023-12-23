// lib/putAddCart.ts

const postEvaluate = async (accessToken, transactionID) => {

    const body = {
        accessToken,
        transactionID,        
    };
    const res = await fetch('/api/evaluate', {
        method: "POST",        
        body: JSON.stringify(body)
    });
    const data = await res.json();
    return data;
}

export default postEvaluate;
