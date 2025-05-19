const taskStatus = ["done", "todo", "inprogress"];
const vaildOptions = [
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

export function validateTaskStatus(status: string[]) {}

export function validateTaskDescription(description: string) {
  if (!description) {
    throw new Error("Missing task description, please provide one").message;
  }
}

export function validateTaskOption(option) {}
