import { BaseStores } from './BaseStores';
import { StoreA } from './StoreA';
import { UserStore } from './UserStore';

export class Stores extends BaseStores {
  storeA: StoreA;
  userStore: UserStore;

  constructor() {
    super();
    this.storeA = this.register(StoreA);
    this.userStore = this.register(UserStore);

    this.initStores();
  }
}
