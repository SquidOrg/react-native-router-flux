import * as types from './actionTypes';

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    type: types.LOAD,
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    type: types.LOGIN,
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
    promise: (client) => client.get('/logout')
  };
}
