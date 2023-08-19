import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

export function useStores<T>(): T {
  return useContext(MobXProviderContext) as unknown as T;
}
