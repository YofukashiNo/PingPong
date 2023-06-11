import { webpack } from "replugged";
import * as Types from "../types";
export const GuildReadStateStore = webpack.getByProps<Types.GuildReadStateStore>(
  "getMentionCount",
  "getTotalMentionCount",
);
export const ReadStateStore = webpack.getByProps<Types.ReadStateStore>("getReadStatesByChannel");
