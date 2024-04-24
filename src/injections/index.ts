import Modules from "../lib/requiredModules";
import injectGuildReadStateStore from "./GuildReadStateStore";
import injectReadStateStore from "./ReadStateStore";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectGuildReadStateStore();
  injectReadStateStore();
};

export default { applyInjections };
