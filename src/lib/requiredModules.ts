import { webpack } from "replugged";
import * as Types from "../types";
export const GuildReadStateStore = webpack.getByProps(
  "getMentionCount",
  "getTotalMentionCount",
) as unknown as Types.GuildReadStateStore;
export const ReadStateStore = webpack.getByProps(
  "getReadStatesByChannel",
) as unknown as Types.ReadStateStore;
