import readline from "readline";

// Define Todo type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Store todos in memory (array)
let todos: Todo[] = [];

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Add a new todo
const addTodo = (): void => {
  rl.question("Enter task: ", (text: string) => {
    if (text.trim() === "") {
      console.log("Task cannot be empty!\n");
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };

      todos.push(newTodo);
      console.log("✓ Task added successfully!\n");
    }
    showMenu();
  });
};

// Mark a todo as done
const markAsDone = (): void => {
  rl.question("Enter task ID to mark as done: ", (input: string) => {
    const id: number = parseInt(input);
    const todo = todos.find((todo: Todo) => todo.id === id);

    if (!todo) {
      console.log("Task not found!\n");
    } else if (todo.completed) {
      console.log("Task is already completed!\n");
    } else {
      todo.completed = true;
      console.log("✓ Task marked as done!\n");
    }

    showMenu();
  });
};

const listTodos = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, done, remove, exit\n");

  if (todos.length === 0) {
    console.log("No todos yet!\n");
  } else {
    console.log("Your Todos:");
    todos.forEach((todo: Todo) => {
      const status = todo.completed ? "✓" : "not done :(";
      console.log(`${status} ${todo.id}. ${todo.text}`);
    });
    console.log("");
  }

  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Remove a todo
const removeTodo = (): void => {
  rl.question("Enter task ID to remove: ", (input: string) => {
    const id: number = parseInt(input);

    // Use filter to create new array without the todo
    const updatedTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);

    if (updatedTodos.length === todos.length) {
      console.log("Task not found!\n");
    } else {
      todos = updatedTodos;
      console.log("Task removed successfully!\n");
    }

    showMenu();
  });
};

// Handle command logic
const handleCommand = (command: string): void => {
  switch (command.trim().toLowerCase()) {
    case "add":
      addTodo();
      break;
    case "list":
      listTodos();
      break;
    case "done":
      markAsDone();
      break;
    case "remove":
      removeTodo();
      break;
    case "exit":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Unknown command\n");
      showMenu();
  }
};

// Show menu and handle commands
const showMenu = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, done, remove, exit\n");
  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Start the app
console.log("\n=== Todo List App ===");
console.log("Commands: add, list, done, remove, exit\n");
showMenu();
