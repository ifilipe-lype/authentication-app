export async function makeApiCall({
    route,
    method,
    headers,
    body,
    query,
    params
}){
    
    const res = await fetch(`/api/${route}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(body),
        query,
        params
    });

    if (res.status === 500) throw new Error("Network error, checks your internet connection!");

    let data = await res.json();
    if (data.error) throw new Error(data.error);

    return data;
}
