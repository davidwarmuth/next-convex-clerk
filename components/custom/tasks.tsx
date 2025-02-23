"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { TaskCarousel } from "./task-carousel";
import { AddTask } from "./add-task";

export default function Tasks() {
  try {
    const tasks = useQuery(api.tasks.get);

    const todo = tasks?.filter((task) => task.status === "todo");
    const progress = tasks?.filter((task) => task.status === "in progress");
    const done = tasks?.filter((task) => task.status === "done");

    const taskCount =
      tasks?.filter(
        (task) => task.status !== "canceled" && task.status !== "backlog"
      ).length || 0;

    return (
      <section className="container">
        <div className="flex gap-2">
          <h2 className="text-3xl font-bold">Tasks</h2>
          <AddTask />
        </div>
        <p className="mt-3 text-lg text-muted-foreground">
          A list of tasks. {"(Total: " + taskCount + ")"}
        </p>
        <ul className="mt-6 space-y-2">
          <li>
            <TaskCarousel title="To Do" tasks={todo} />
          </li>
          <li>
            <TaskCarousel title="In Progress" tasks={progress} />
          </li>
          <li>
            <TaskCarousel title="Done" tasks={done} />
          </li>
        </ul>
      </section>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return (
        <section className="container">
          {error.message.includes("Not authenticated") ? (
            <p className="text-lg text-red-500 dark:text-red-900">
              You are not authenticated. Please log in to view your tasks.
            </p>
          ) : (
            <p className="text-lg text-red-500 dark:text-red-900">
              An error occurred while fetching your tasks. Please try again
              later.
            </p>
          )}
        </section>
      );
    }

    // Wenn der Fehler kein Error-Objekt ist, kannst du einen generischen Fehler anzeigen
    return (
      <section className="container">
        <p className="text-lg text-red-500 dark:text-red-900">
          An unknown error occurred. Please try again later.
        </p>
      </section>
    );
  }
}
