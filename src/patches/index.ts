import { patchGuildReadStateStore } from "./GuildReadStateStore";
import { patchReadStateStore } from "./ReadStateStore";
export const applyInjections = (): void => {
  patchGuildReadStateStore();
  patchReadStateStore();
};
