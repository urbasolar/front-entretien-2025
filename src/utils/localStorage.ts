export const saveDataLocalStorage  = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
    // Thanks to this event, it's possible to catch storage event
    // and update a useState
    window.dispatchEvent(new Event('storage'))
}

export const getDataLocalStorage = (key: string): string | null => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}

export const resetLocalStorage = (): void => localStorage.clear()

export const deleteDataLocalStorage = (keys: string[]): void => {
    keys.forEach(key => {
        localStorage.removeItem(key);
    });
}