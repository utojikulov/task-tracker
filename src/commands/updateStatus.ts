import {
  validateTaskId,
  validateTaskStatus,
} from "../validations/validations.js";
import { loadFile, save } from "../utils/handler.js";
import { Task } from "../types/interface.task.js";

export async function updateStatus(option: string, id: number) {
  const validTaskOptions: { [index: string]: any } = {
    "mark-todo": "todo",
    "mark-inprogress": "inprogress",
    "mark-done": "done",
  };
  const status = validTaskOptions[option];
  try {
    validateTaskStatus(status);
    validateTaskId(id);

    const tasks: Task[] = await loadFile();
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex === -1) {
      throw new Error(`Task with ID ${id} not found.`).message;
    }

    tasks[taskIndex].status = status;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    await save(tasks);
    console.log(`Task with ID: ${id} marked as ${status}`);
  } catch (error) {
    console.error("Error updating task:", error);
  }
}
