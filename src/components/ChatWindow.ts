class ChatWindow {
  private messages: string[];

  constructor() {
    this.messages = [];
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

  update(newMessages: string[]) {
    this.messages = newMessages;
    this.render();
  }
}

export default ChatWindow;
