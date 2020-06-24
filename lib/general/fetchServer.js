import fetch from 'node-fetch';

const SERVER = 'https://www.vtra.app';

export default function fetchServer(token = '', endPoint, method, params) {
    return new Promise((resolve, reject) => {
        fetch(SERVER + endPoint, {
            method: method,
            timeout: 1000 * 60,
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                signature: token
            }
        })
            .then(res => res.json())
            .then(json => { resolve(json) })
            .catch(error => { reject({ error: error }) })
    })
}