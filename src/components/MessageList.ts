export class MessageList {
    private messages: string[];

    constructor() {
        this.messages = [];
    }

    public renderMessages(): void {
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
            messageContainer.innerHTML = this.messages.map(msg => `<div class="message">${msg}</div>`).join('');
        }
    }

    public addMessage(message: string): void {
        this.messages.push(message);
        this.renderMessages();
    }
}