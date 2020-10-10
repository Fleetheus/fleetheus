import api from '../api/api'

export default {
  namespaced: true,
  actions: {
    login ({ state }: VuexAction, { username, password }: LoginObject) {
      return api.users.login(username, password)
    }
  }
}

interface LoginObject {
  username: string;
  password: string;
};

interface VuexAction {
  state: Function;
}
