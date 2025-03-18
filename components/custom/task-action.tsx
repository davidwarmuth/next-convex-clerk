import { Task } from "@/types/tasks";
import { EditTask } from "./edit-task";
import { DeleteTask } from "./delete-task";
import { cn } from "@/lib/utils";

export function TaskAction({
  task,
  className,
}: {
  task: Task;
  className?: string;
}) {
  return (
    <div className={cn("flex text-muted-foreground", className)}>
      <EditTask task={task} />
      <DeleteTask task={task} />
    </div>
  );
}
