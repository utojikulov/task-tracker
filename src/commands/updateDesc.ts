import {
  validateTaskDescription,
  validateTaskId,
} from "../validations/validations.js";
import { loadFile, save } from "../utils/handler.js";
import { Task } from "../types/interface.task.js";

export async function updateDesc(id: number, description: string) {
  try {
    validateTaskId(id);
    validateTaskDescription(description);

    const tasks: Task[] = await loadFile();
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex === -1) {
      throw new Error(`Task ${id} not found.`).message;
    }

    tasks[taskIndex].description = description;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    await save(tasks);
    console.log("Task updated successsfully");
  } catch (err) {
    console.log("Error occured when updating task.", err);
  }
}
