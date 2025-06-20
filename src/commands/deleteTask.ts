import { validateTaskId } from "../validations/validations.js";
import { loadFile, save } from "../utils/handler.js";
import { Task } from "../types/interface.task.js";

export async function del(id: number): Promise<void> {
  try {
    validateTaskId(id);
    const tasks: Task[] = await loadFile();
    const taskIndex = tasks.findIndex(
      (task: { id: number }) => task.id === Number(id),
    );

    if (taskIndex === -1) {
      throw new Error(`Task with ID ${id} not found.`);
    }

    tasks.splice(taskIndex, 1);
    await save(tasks);
    console.log(`Task removed successfully (ID: ${id})`);
  } catch (error) {
    console.error("Error removing Task", error);
  }
}
