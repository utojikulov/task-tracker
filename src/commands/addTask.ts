import { loadFile, generateId, save } from "../utils/fileHandler.js";
import { Task } from "../types/interface.task.js";
import chalk from "chalk";
// import { validateTaskDescription } from "../validations/validateTask.js";

export async function addTask(description: string) {
  try {
    // validateTaskDescription(description)

    const tasks: Task[] = await loadFile();
    const id = generateId(tasks);
    const now = new Date().toISOString();

    const newTask: Task = {
      id,
      description,
      status: "todo",
      createdAt: now,
      updatedAt: now,
    };

    tasks.push(newTask);
    await save(tasks);
    console.log(chalk.greenBright(`Task Added Successfully: `), newTask.id);
  } catch (error) {
    console.error(chalk.red("Error occured when trying to add a task"), error);
  }
}
