import { Task } from "../types/interface.task.js";
import { loadFile } from "../utils/fileHandler.js";
import { validateTaskStatus } from "../validations/validateTask.js";

export async function readTask(status: string): Promise<void> {
  try {
    const tasks: Task[] = await loadFile();

    if (status) {
      validateTaskStatus(status);
    }

    const filteredTasks = status
      ? tasks.filter((task) => task.status === status)
      : status;

    if (filteredTasks.length > 0) {
      console.log(filteredTasks);
    } else {
      const message = status
        ? `Any task with status ${status} found.`
        : "No tasks found.";
      console.log(message);
    }
  } catch (error) {
    console.error("Error occured when reading tasks:", error);
  }
}
