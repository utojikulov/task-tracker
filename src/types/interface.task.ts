export interface Task {
  id: number;
  description: string;
  status: "todo" | "inprogress" | "done";
  createdAt: "string";
  updatedAt: "string";
}
