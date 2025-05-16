import { error } from "console";
import fs from "fs";

const taskFile = "tasks.json";
const taskFilePath = new URL(taskFile, import.meta.url).pathname;

// initializing if the task file exists and creating if it is not.
export function createTaskFile() {
  try {
    if (!fs.existsSync(taskFilePath)) {
      fs.writeFile(taskFile, "[]", (err) => {
        if (err) throw err;
      });
    }
  } catch {
    console.error(`Error on creating file ${taskFile}`, error);
  }
}

// loading/reading file
export async function loadFile() {
  try {
    createTaskFile();
    return JSON.parse(await fs.readFile(taskFilePath));
  } catch (error) {
    console.error(`Error loading file ${taskFile}`, error);
  }
}

// generating id for each
export async function generateId(taskList) {
  let maxId = 0;
  for (const task of taskList) {
    maxId = Math.max(maxId, task.id);
  }
  return maxId + 1;
}

// saving tasks
export async function save(tasks) {
  try {
    await fs.writeFile(taskFilePath, JSON.stringify(tasks));
  } catch (error) {
    console.error(`Error loading file ${taskFile}`, error);
  }
}
