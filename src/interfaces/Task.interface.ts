import { TaskType } from "@types";

export interface ITask {
  id: number;
  name: string;
  type: TaskType;
}
