# Web-Navigator

## Project Overview

**Web Navigator** is a project that simulates the navigational behavior of a web browser using stacks. The goal is to implement forward and backward navigation similar to what browsers use. This project helps understand **stack-based data structures** and their real-world applications in a fun and practical way.

## Features

- Navigate between pages using stacks for "Back" and "Next" functionality.
- Peek at the current, previous, and next pages.
- Add new pages to the stack with an option to clear the forward history when a new page is visited.
- A simple command-line interface to simulate navigation.
- Implement unit tests for each feature to ensure functionality.
- **(Optional)** Extend the project to use TypeScript for stronger typing and more robust development.

## Core Concepts

- **Stack**: A Last-In-First-Out (LIFO) data structure used for managing web pages in history.
- **Back navigation**: Uses one stack to store previously visited pages.
- **Next navigation**: Uses another stack to store pages visited after going back, until a new page is visited.

## Stack Operations

- **Push**: Add a new page to the stack when a new page is visited.
- **Pop**: Remove the current page from the stack to navigate back or forward.
- **Peek**: Check the current, next, or previous page without removing it.

## How It Works

1. The user starts on a default page.
2. The program prompts the user to enter a new URL or choose to navigate backward or forward.
3. As pages are visited:
   - The current page is pushed to the "back" stack.
   - If navigating backward, the current page is pushed to the "next" stack.
4. If a new page is visited after navigating back, the "next" stack is cleared, mimicking real browser behavior.
5. The user can quit the application at any time by entering the quit command.

## Technologies Used

- **JavaScript/Node.js**: For the core logic and browser simulation.
- **Stacks**: As the primary data structure for managing navigation history.
- **Prompt-sync**: A library to capture user input in the command-line interface.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/web-navigator.git
   ```
2. npm start (runs the build command first and then starts the app)
