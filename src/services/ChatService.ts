export class ChatService extends HTMLInputElement {
  private messages: Array<{ user: string; content: string }> = [];
  private eventListeners: { [event: string]: ((...args: any[]) => void)[] } =
    {};

  sendMessage(user: string, content: string): void {
    const message = { user, content };
    this.messages.push(message);
    // Here you would typically send the message to the server
  }

  fetchMessages(): Array<{ user: string; content: string }> {
    // Here you would typically fetch messages from the server
    return this.messages;
  }

  on(event: string, listener: (...args: any[]) => void) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(listener);
  }
}
