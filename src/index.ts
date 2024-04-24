import { Injector, Logger } from "replugged";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("PingPong");
import Injections from "./injections/index";

export const start = (): void => {
  void Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
