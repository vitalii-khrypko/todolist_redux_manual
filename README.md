# Todolist Redux Manual

Todolist Redux Manual is a React-based to-do list application that simulates Redux store functionality **without using the actual Redux library**. Instead of Redux, the state is managed at the top-level component and passed down through **props**, mimicking the unidirectional data flow of Redux.

## Technologies
- **React** - for building the user interface.
- **Props for state management** - instead of Redux, state is lifted up and passed down through components.
- **CSS3** - for styling the application.

## Features
- Add, remove, and mark tasks as completed.
- Centralized state management using a manually implemented store pattern.
- State is passed down via props to simulate Redux’s data flow.
- Simple and clean UI.

## How to Run the Project
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/vitalii-khrypko/todolist_redux_manual.git
2. Navigate to the project folder and install the dependencies:
  ```bash
  cd todolist_redux_manual && npm install
  ```
3. Run the project locally:
  ```bash
  npm start
  ```

The project will start a development server and open the app in your default browser.

## Contributors
**Vitalii Khrypko** - Project author.

