const validStatus = ["done", "todo", "inprogress"];
const validOptions = [
  "add",
  "remove",
  "update",
  "list",
  "mark-done",
  "mark-todo",
  "mark-inprogress",
];

export function validateTaskId(id: number) {
  if (isNaN(id) || !id) {
    throw new Error(`Invalid Task ID. Please provide a valid numberic id.`)
      .message;
  }
}

export function validateTaskStatus(status: string) {
  if (!validStatus.includes(status) && status !== undefined) {
    throw new Error(
      `Invalid task status '${status}'. Provide a valid option: ${validStatus.join(
        ", ",
      )}.`,
    ).message;
  }
}

export function validateTaskDescription(description: string) {
  if (!description) {
    throw new Error("Missing task description, please provide one").message;
  }
}

export function validateTaskOption(option: string) {
  if (!validOptions.includes(option)) {
    console.error(`Invalid option. Valid options: ${validOptions.join(", ")}`);
  }
}
