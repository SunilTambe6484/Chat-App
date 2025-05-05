export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function validateInput(input: string): boolean {
    return input.trim().length > 0;
}

export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}