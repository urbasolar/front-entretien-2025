export const isArrayGuard = (data: any): data is any[] => {
    return Array.isArray(data);
}