# Chat Application

This is a simple chat application built with TypeScript. It allows users to send and receive messages in real-time.

## Project Structure

```
chat-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── components
│   │   ├── ChatWindow.ts     # Manages the chat interface
│   │   ├── MessageInput.ts    # Handles user input for messages
│   │   └── MessageList.ts     # Displays the list of messages
│   ├── services
│   │   └── ChatService.ts     # Manages chat logic and server communication
│   ├── utils
│   │   └── helpers.ts         # Utility functions for various tasks
│   └── types
│       └── index.ts           # Defines Message and User interfaces
├── public
│   └── index.html             # Main HTML file for the application
├── package.json                # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd chat-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

Open your browser and navigate to `http://localhost:3000` to access the chat application.

## Features

- Real-time messaging
- User-friendly interface
- Message history retrieval

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.