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

export async function signIn({ email, password }){
    const {token} = await makeApiCall({
        route: "auth/signin",
        method: "POST",
        body: { email, password },
    });

    return token;
}

export async function signUp({ name, email, password }){
    const { token } = await makeApiCall({
        route: "auth/signup",
        method: "POST",
        body: { name, email, password },
    });

    return token;
}

export async function getUserProfile({ token }){
    if(!token) return null;
    return null;
}
