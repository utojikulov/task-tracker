import { Task } from "../types/interface.task.js";
import { loadFile } from "../utils/handler.js";
import { validateTaskStatus } from "../validations/validations.js";
import chalk from "chalk";
// import boxen from "boxen";

export async function read(status: string): Promise<void> {
  try {
    const tasks: Task[] = await loadFile();

    if (status) {
      validateTaskStatus(status);
    }

    const filteredTasks: Task[] = status
      ? tasks.filter((task: Task) => task.status === status)
      : tasks;

    if (filteredTasks.length > 0) {
      filteredTasks.forEach((task) => {
        console.log(
          `${chalk.green(task.id)} ${chalk.yellowBright(task.status)} ${task.description}`,
        );
      });
    } else {
      const message = status
        ? `No task with status ${status} found.`
        : "No tasks found.";
      console.log(message);
    }
  } catch (error) {
    console.error("Error occured when reading tasks:", error);
  }
}
