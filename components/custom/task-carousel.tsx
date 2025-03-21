import { Task } from "@/types/tasks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChartNoAxesColumn } from "lucide-react";
import { TaskAction } from "./task-action";

export function TaskCarousel({
  title,
  tasks,
}: {
  title: string;
  tasks?: Task[];
}) {
  return (
    <div className="mt-10">
      <h3 className="p-2 text-xl border-b-2">
        {title}{" "}
        <span className="text-muted-foreground text-lg">
          {tasks && "(" + tasks?.length + ")"}
        </span>
      </h3>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[calc(100%-96px)]"
        >
          <CarouselContent>
            {tasks?.map((task) => (
              <CarouselItem
                key={task._id}
                className="sm:basis-1/2 lg:basis-1/3 grow h-inherit"
              >
                <div className="py-6 px-1 h-full">
                  <Card
                    key={task._id}
                    className="flex flex-col justify-between h-full"
                  >
                    <CardHeader className="pb-3 flex-row items-start justify-between gap-2">
                      <CardTitle className="text-xl">{task.title}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="!mt-0 h-7 text-muted-foreground"
                      >
                        {task.priority}
                      </Badge>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {
                          new Date(task._creationTime)
                            .toISOString()
                            .split("T")[0]
                        }
                      </div>
                      <TaskAction task={task} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )) || (
              <CarouselItem className="">
                <div className="py-6 px-1">
                  <Card>
                    <CardContent className="p-12 flex flex-col gap-2 items-center text-muted-foreground">
                      <ChartNoAxesColumn className="size-12 opacity-40" />
                      <CardTitle className="text-lg">No data to show</CardTitle>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
