import { useInsertionEffect, useState } from "react";
import { ExternalStoreRuntime } from "./ExternalStoreRuntime";
import { ExternalStoreAdapter } from "./ExternalStoreAdapter";

export const useExternalStoreRuntime = <T,>(store: ExternalStoreAdapter<T>) => {
  const [runtime] = useState(() => new ExternalStoreRuntime(store));

  useInsertionEffect(() => {
    runtime.store = store;
  });

  return runtime;
};
