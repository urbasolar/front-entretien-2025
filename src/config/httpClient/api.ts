import ky from "ky"

import { updateToken } from '@utils/authentication';
import { config as environment } from '@config/environnement'

const api = ky.create({
    prefixUrl: environment.API_URL,
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
    },
    timeout: 30000,
    hooks: {
      beforeRequest: [
        async request => {
            const token = await updateToken(); // Function to get the token from the Keycloak instance
            request.headers.set("Authorization", `Bearer ${token}`)
        },
      ],
    },
})

export {
    api
}

// Others functions for similar HTTP methods (PUT, DELETE, PATCH, etc.)