import { ApplicationCommandType } from "../enum/application-command-type";

export interface Command {
  name: string;
  description: string;
  type: ApplicationCommandType
}
