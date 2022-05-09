const API_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:3001/api/';

export function api(url: string, body?: any, method?: string, headers?: HeadersInit) {
    let options: RequestInit = { headers };

    if (body) {
        options = {
            method: method ?? 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              'Content-Type': 'application/json',
              ...headers
            },
            body: JSON.stringify(body) // body data type must match "Content-Type" header
        };
    }
        


    return fetch( API_URL + url, options).then(res => res.json());
}