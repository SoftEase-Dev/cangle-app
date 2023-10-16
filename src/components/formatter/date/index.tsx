// dateFormatter.ts
export function formatDateTime(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year}, ${hours}:${minutes}`;
}
