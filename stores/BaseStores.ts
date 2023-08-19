import { BaseStore } from './BaseStore';

export class BaseStores {
  protected storeList: BaseStore[];

  constructor() {
    this.storeList = [];
  }

  protected register<T>(storeClass: { new (): BaseStore }): T {
    const store = new storeClass();
    this.storeList.push(store);
    return store as unknown as T;
  }

  protected initStores() {
    this.storeList.forEach(async (store) => await store?.init?.());
  }
}
