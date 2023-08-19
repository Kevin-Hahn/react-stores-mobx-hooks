import { action, computed, makeObservable, observable } from 'mobx';
import { BaseStore } from './BaseStore';

export class UserStore extends BaseStore {
  userUrl = 'https://jsonplaceholder.typicode.com/users';
  users = [];
  
  constructor() {
    super();

    makeObservable(this, {
      users: observable,
      getUsers: action,
      userCount: computed,
      isEmpty: computed,
    });
  }

  // this mobx "action" will set the users and informs all "observers"
  /* ! if you try to set the users without an action it will work BUT will warn you:
     [MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed.
  */
  setUsers = action((users) => {
    this.users = users;
  });

  // API call with promises, updates the users via action at the end
  getUsers = () => {
    if (this.isEmpty) {
      fetch(this.userUrl).then((response) => {
        response.json().then((users) => {
          this.setUsers(users);
        });
      });
    }
  };

  // cumputed getters -> will update in component whenever this.user changes
  get userCount() {
    return this.users.length;
  }

  get isEmpty() {
    return this.users.length === 0;
  }
}
