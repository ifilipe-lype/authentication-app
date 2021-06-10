export async function makeApiCall({
    route,
    method,
    headers,
    body,
}){

    let restObj = {};

    if(body) restObj.body = JSON.stringify(body);
    
    const res = await fetch(`/api/${route}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        ...restObj
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
    const { user } = await makeApiCall({
        route: "users/me",
        headers: {
            "x-auth-token": `Bearer ${token}`
        },
    });

    return user;
}

export async function updateUserProfile({ token, values }){
    const { updatedUser } = await makeApiCall({
        route: "users/me",
        headers: {
            "x-auth-token": `Bearer ${token}`
        },
        method: "PUT",
        body: {
            ...values
        }
    });

    return updatedUser;
}
