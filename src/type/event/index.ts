import { UIEvent } from "./ui";
import { ServiceEvent } from "./service";

export type AppEvent = UIEvent | ServiceEvent;
