import { useMemo } from 'react';
import {
  createStore,
  applyMiddleware,
  Store,
  Action,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState, { GlobalState } from './initialState';
import reducer from './reducer';

let store: Store<GlobalState, Action>;

function initStore(preloadedState: GlobalState = initialState): Store<GlobalState, Action> {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  );
}

export const initializeStore = (preloadedState: GlobalState): Store<GlobalState, Action> => {
  let newStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    newStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return newStore;
  // Create the store once in the client
  if (!store) store = newStore;

  return newStore;
};

export function useStore(initialState1: GlobalState): Store<GlobalState, Action> {
  const store1 = useMemo(() => initializeStore(initialState1), [initialState1]);
  return store1;
}
