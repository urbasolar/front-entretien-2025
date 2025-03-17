import { api } from "@config/httpClient/api"

const hasAccess = async () => {
    try {
        const response = await api.get(''); // With ky, the prefixUrl is already set
        return response
    } catch (error) {
        console.error(error);
        throw new Error((error as Error).message)
    }
}
export {
    hasAccess
}