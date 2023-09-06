export enum ApplicationCommandType {
  ChatInput = 1,
  User = 2,
  Message = 3,
}

export const ApplicationCommandTypeTextMap: Record<ApplicationCommandType, string> = {
  [ApplicationCommandType.ChatInput]: "Chat Input",
  [ApplicationCommandType.User]: "User",
  [ApplicationCommandType.Message]: "Message",
};

export const applicationCommandTypeOptions = (
  Object.keys(ApplicationCommandTypeTextMap) as unknown[] as ApplicationCommandType[]
).reduce((res, key) => {
  res.push({
    value: key,
    text: ApplicationCommandTypeTextMap[key as ApplicationCommandType],
  });
  return res;
}, [] as { value: any; text: string }[]);
