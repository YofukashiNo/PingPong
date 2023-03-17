import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";

export interface GuildReadStateStore {
  getGuildChangeSentinel: DefaultTypes.AnyFunction;
  getGuildHasUnreadIgnoreMuted: DefaultTypes.AnyFunction;
  getMentionCount: DefaultTypes.AnyFunction;
  getMentionCountForChannels: DefaultTypes.AnyFunction;
  getMutableGuildStates: DefaultTypes.AnyFunction;
  getMutableUnreadGuilds: DefaultTypes.AnyFunction;
  getPrivateChannelMentionCount: DefaultTypes.AnyFunction;
  getStoreChangeSentinel: DefaultTypes.AnyFunction;
  getTotalMentionCount: DefaultTypes.AnyFunction;
  hasAnyUnread: DefaultTypes.AnyFunction;
  hasUnread: DefaultTypes.AnyFunction;
  takeSnapshot: DefaultTypes.AnyFunction;
  persistKey: string;
}
export interface ReadStateStore {
  ackMessageId: DefaultTypes.AnyFunction;
  getAllReadStates: DefaultTypes.AnyFunction;
  getForDebugging: DefaultTypes.AnyFunction;
  getGuildChannelUnreadState: DefaultTypes.AnyFunction;
  getMentionCount: DefaultTypes.AnyFunction;
  getOldestUnreadMessageId: DefaultTypes.AnyFunction;
  getOldestUnreadTimestamp: DefaultTypes.AnyFunction;
  getReadStatesByChannel: DefaultTypes.AnyFunction;
  getTrackedAckMessageId: DefaultTypes.AnyFunction;
  getUnreadCount: DefaultTypes.AnyFunction;
  hasNotableUnread: DefaultTypes.AnyFunction;
  hasOpenedThread: DefaultTypes.AnyFunction;
  hasRecentlyVisitedAndRead: DefaultTypes.AnyFunction;
  hasRelevantUnread: DefaultTypes.AnyFunction;
  hasTrackedUnread: DefaultTypes.AnyFunction;
  hasUnread: DefaultTypes.AnyFunction;
  hasUnreadPins: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isEstimated: DefaultTypes.AnyFunction;
  isForumPostUnread: DefaultTypes.AnyFunction;
  isNewForumThread: DefaultTypes.AnyFunction;
  lastMessageId: DefaultTypes.AnyFunction;
  lastPinTimestamp: DefaultTypes.AnyFunction;
  addChangeListener: DefaultTypes.AnyFunction;
  removeChangeListener: DefaultTypes.AnyFunction;
}
