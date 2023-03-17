import { PluginInjector } from "../index";
import { ReadStateStore } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
export const patchReadStateStore = (): void => {
  PluginInjector.instead(ReadStateStore, "getMentionCount", () => Utils.randomNo(0, 9000));
};
