export class MessageInput {
  private inputElement: HTMLInputElement;
  private messages: string[] = [];
  private eventListeners: { [event: string]: ((...args: any[]) => void)[] } =
    {};

  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
    this.inputElement.addEventListener(
      "input",
      this.handleInputChange.bind(this)
    );
  }

  private handleInputChange(): void {
    // Logic to handle input change can be added here
  }

  public sendMessage(chatService: any): void {
    const message = this.inputElement.value;
    if (message.trim()) {
      chatService.sendMessage(message);
      this.inputElement.value = ""; // Clear input after sending
    }
  }

  render() {
    const chatContainer = document.createElement("div");
    chatContainer.className = "chat-window";

    const messageList = this.renderMessages();
    chatContainer.appendChild(messageList);

    document.body.appendChild(chatContainer);
  }

  renderMessages() {
    const messageList = document.createElement("ul");
    this.messages.forEach((message) => {
      const messageItem = document.createElement("li");
      messageItem.textContent = message;
      messageList.appendChild(messageItem);
    });
    return messageList;
  }

  on(event: string, listener: (...args: any[]) => void) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(listener);
  }
}
