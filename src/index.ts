import { addTask } from "./commands/addTask.js";
import { deleteTask } from "./commands/deleteTask.js";
import { readTask } from "./commands/readTask.js";
import { updateTask } from "./commands/updateTask.js";
// import { validateTaskOption } from "./validations/validateTask.js";

const [, , command, arg1, arg2] = process.argv;

async function main() {
  switch (command) {
    case "add":
      await addTask(arg1);
      break;
    case "remove":
      await deleteTask(Number(arg1));
      break;
    // case "update":
    //   await updateTask(arg1, arg2);
    //   break;
    // case "list":
    //   await readTask(arg1);
    //   break;
    // case "mark-todo":
    //   await updateTask(option, arg1);
    //   break;
    // case "mark-done":
    //   await updateTask(option, arg1);
    //   break;
    // case "mark-in-progress":
    //   await updateTask(option, arg1);
    //   break;
    default:
    // validateTaskOption(option);
  }
}

main();
