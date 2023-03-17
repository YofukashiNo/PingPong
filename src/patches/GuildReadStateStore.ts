import { PluginInjector } from "../index";
import { GuildReadStateStore } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
export const patchGuildReadStateStore = (): void => {
  PluginInjector.instead(GuildReadStateStore, "getMentionCount", () => Utils.randomNo(0, 9000));
};
