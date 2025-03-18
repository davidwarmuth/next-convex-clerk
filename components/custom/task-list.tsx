"use client";

import { api } from "@/convex/_generated/api";
import { Task } from "@/types/tasks";
import { useQuery } from "convex/react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { TaskAction } from "./task-action";
import { getStatusIcon } from "./icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AddTask } from "./add-task";

export function TaskList() {
  const tasks = useQuery(api.tasks.get);

  const taskCount = tasks?.length || 0;
  return (
    <section className="container max-h-[calc(100svh-238px)] sm:max-h-[calc(100svh-218px)] flex flex-col">
      <div className="lg:mx-auto px-4 max-w-screen-lg lg:min-w-[960px] sm:flex gap-4 items-end">
        <div className="flex gap-3">
          <h2 className="text-3xl font-bold">Tasks</h2>
          <AddTask />
        </div>
        <p className="mt-3 sm:mt-0 sm:ml-auto text-lg text-muted-foreground">
          A list of tasks. {"(Total: " + taskCount + ")"}
        </p>
      </div>
      <Separator className="my-3 max-w-screen-lg mx-auto" />
      <div className="max-w-[960px] lg:mx-auto lg:min-w-[960px] min-h-80 overflow-y-scroll custom-scrollbar">
        <ul className="max-w-[704px] md:mx-auto md:min-w-[704px]">
          {tasks &&
            tasks.map((task: Task, index: number) => (
              <li
                key={task._id}
                className="relative m-4 p-2 min-w-[170px] grid grid-cols-[auto,1fr] sm:flex gap-3 items-center border rounded-xl"
              >
                <p className="absolute p-1 -translate-x-1/2 sm:-translate-x-full bg-background text-border rounded-lg">
                  {taskCount - index}
                </p>
                <div className="ml-1 flex items-center gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="pl-2">
                        {getStatusIcon(task.status)}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{task.status}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Separator orientation="vertical" className="h-8 w-[2px]" />
                </div>
                <div className="hidden sm:grid grid-cols-[1fr,auto] items-center justify-center gap-3 w-20">
                  <Badge
                    variant="secondary"
                    className="mx-auto capitalize text-muted-foreground"
                  >
                    {task.priority}
                  </Badge>
                  <Separator orientation="vertical" className="h-8 w-[2px]" />
                </div>
                <h4 className="ml-2">{task.title}</h4>
                <div className="col-span-2 sm:grow flex items-center">
                  <Badge
                    variant="secondary"
                    className="ml-1 flex sm:hidden capitalize text-muted-foreground"
                  >
                    {task.priority}
                  </Badge>
                  <TaskAction task={task} className="ml-auto" />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
