import { action, computed, makeObservable, observable } from 'mobx';
import { BaseStore } from './BaseStore';

export class StoreA extends BaseStore {
  somePropertyText: string;

  constructor() {
    super();

    makeObservable(this, {
      somePropertyText: observable,
      someProperty: computed,
    });
  }

  get someProperty(): string {
    return this.somePropertyText;
  }

  setSomePropertyText = action((value: string) => {
    this.somePropertyText = value;
  });
}
