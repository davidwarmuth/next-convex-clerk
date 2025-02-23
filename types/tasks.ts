import { Id } from "@/convex/_generated/dataModel";

export type Task = {
  _id: Id<"tasks">;
  title: string;
  priority: string;
  status: string;
  _creationTime: number;
};
