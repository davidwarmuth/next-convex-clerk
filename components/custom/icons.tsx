import {
  CheckCircle,
  Circle,
  CircleHelp,
  CircleOff,
  LucideProps,
  Timer,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  notFound: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m19.5,1H4.5C2.019,1,0,3.019,0,5.5v13c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V5.5c0-2.481-2.019-4.5-4.5-4.5Zm-15,1h15c1.93,0,3.5,1.57,3.5,3.5v2.5H1v-2.5c0-1.93,1.57-3.5,3.5-3.5Zm15,20H4.5c-1.93,0-3.5-1.57-3.5-3.5v-9.5h22v9.5c0,1.93-1.57,3.5-3.5,3.5ZM3,5c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm3,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm3,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm8.354,6.854l-1.396,1.396,1.396,1.396c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-1.396-1.396-1.396,1.396c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l1.396-1.396-1.396-1.396c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.396,1.396,1.396-1.396c.195-.195.512-.195.707,0s.195.512,0,.707Zm-8.604,2.104l-1.396,1.396c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l1.396-1.396-1.396-1.396c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.396,1.396,1.396-1.396c.195-.195.512-.195.707,0s.195.512,0,.707l-1.396,1.396,1.396,1.396c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-1.396-1.396Zm7.7,5.995c-.093.159-.26.248-.432.248-.085,0-.172-.022-.251-.068-2.573-1.502-4.959-1.502-7.532,0-.237.141-.544.059-.684-.18-.139-.238-.059-.544.18-.684,2.883-1.684,5.657-1.684,8.54,0,.239.139.319.445.18.684Z" />
    </svg>
  ),
};

const iconClass = "size-5 ";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "done":
      return (
        <CheckCircle
          className={iconClass + "text-green-600 dark:text-green-700"}
        />
      );
    case "in progress":
      return (
        <Timer className={iconClass + "text-yellow-500 dark:text-yellow-600"} />
      );
    case "backlog":
      return <CircleHelp className={iconClass + "text-muted-foreground"} />;
    case "canceled":
      return (
        <CircleOff className={iconClass + "text-red-600 dark:text-red-800"} />
      );
    case "todo":
      return <Circle className={iconClass + "text-foreground"} />;
    default:
      return <Circle className={iconClass + "text-foreground"} />;
  }
};
