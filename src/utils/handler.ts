import fs from "fs/promises";
import { Task } from "../types/interface.task.js";

const taskFile = "tasks.json";
const taskFilePath = new URL(taskFile, import.meta.url).pathname;

// initializing if the task file exists and creating if it is not.
export async function createTaskFile() {
  try {
    await fs.access(taskFilePath);
  } catch {
    await fs.writeFile(taskFilePath, "[]");
  }
}

// loading/reading file
export async function loadFile() {
  try {
    createTaskFile();
    const data = await fs.readFile(taskFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading file ${taskFile}`, error);
  }
}

// generating id for each
export function generateId(taskList: Task[]): number {
  let maxId = 0;
  for (const task of taskList) {
    maxId = Math.max(maxId, task.id);
  }
  return maxId + 1;
}

// saving tasks
export async function save(tasks: Task[]): Promise<void> {
  try {
    await fs.writeFile(taskFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error(`Error loading file ${taskFile}`, error);
  }
}
