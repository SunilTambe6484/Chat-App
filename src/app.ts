import ChatWindow from "./components/ChatWindow";
import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";
import { ChatService } from "./services/ChatService";

class ChatApp {
  private chatWindow: ChatWindow;
  private messageInput: MessageInput;
  private messageList: MessageList;
  private chatService: ChatService;

  constructor() {
    this.chatService = new ChatService();
    this.chatWindow = new ChatWindow();
    this.messageInput = new MessageInput(this.chatService);
    this.messageList = new MessageList();

    this.initialize();
  }

  private initialize() {
    this.chatWindow.render();
    this.messageInput.render();
    this.messageList.renderMessages();
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.messageInput.on("sendMessage", (message: string) => {
      const user = "defaultUser"; // Replace with actual user logic if needed
      this.chatService.sendMessage(user, message);
      this.messageList.addMessage(message);
    });

    this.chatService.on("messageReceived", (message: string) => {
      this.messageList.addMessage(message);
    });
  }
}

const app = new ChatApp();
