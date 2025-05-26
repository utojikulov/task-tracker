import { addTask } from "./commands/addTask.js";
import { deleteTask } from "./commands/deleteTask.js";
import { readTask } from "./commands/readTask.js";
import { updateTaskStatus } from "./commands/updateTask.js";
import { validateTaskOption } from "./validations/validateTask.js";

const [, , command, arg] = process.argv;

async function main() {
  switch (command) {
    case "add":
      await addTask(arg);
      break;
    case "remove":
      await deleteTask(Number(arg));
      break;
    case "list":
      await readTask(arg);
      break;
    case "mark-todo":
      await updateTaskStatus(command, Number(arg));
      break;
    case "mark-done":
      await updateTaskStatus(command, Number(arg));
      break;
    case "mark-inprogress":
      await updateTaskStatus(command, Number(arg));
      break;
    default:
      validateTaskOption(command);
  }
}

main();
