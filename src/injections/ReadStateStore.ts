import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
export default (): void => {
  PluginInjector.instead(Modules.ReadStateStore, "getMentionCount", () => Utils.randomNo(0, 9000));
};
