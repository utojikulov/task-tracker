import { add } from "./commands/addTask.js";
import { del } from "./commands/deleteTask.js";
import { read } from "./commands/readTask.js";
import { updateDesc } from "./commands/updateDesc.js";
import { updateStatus } from "./commands/updateStatus.js";
import { validateTaskOption } from "./validations/validations.js";

const [, , command, arg, arg1] = process.argv;

async function main() {
  switch (command) {
    case "add":
      await add(arg);
      break;
    case "remove":
      await del(Number(arg));
      break;
    case "update":
      await updateDesc(Number(arg), arg1);
    case "list":
      await read(arg);
      break;
    case "mark-todo":
      await updateStatus(command, Number(arg));
      break;
    case "mark-done":
      await updateStatus(command, Number(arg));
      break;
    case "mark-inprogress":
      await updateStatus(command, Number(arg));
      break;
    default:
      validateTaskOption(command);
  }
}

main();
