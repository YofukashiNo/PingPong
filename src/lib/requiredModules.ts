import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = (): Promise<void> => {
  Modules.GuildReadStateStore ??=
    webpack.getByStoreName<Types.GuildReadStateStore>("GuildReadStateStore");
  Modules.ReadStateStore ??= webpack.getByStoreName<Types.ReadStateStore>("ReadStateStore");
  return Promise.resolve();
};

export default Modules;
