import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { authMiddleware } from '../middlewares/authMiddleware'
import { getCardMiddleware } from '../middlewares/getCardMiddleware'
import { saveCardMiddleware } from '../middlewares/saveCardMiddleware'

const saveData = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('loftTaxi', serialisedState);
    } catch (e) { }
}

const loadData = () => {
    try {
        const serialisedState = localStorage.getItem('loftTaxi');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        return undefined
     }
}

export const store = createStore(rootReducer,
    loadData(),
    applyMiddleware(authMiddleware, getCardMiddleware, saveCardMiddleware),
  
);
store.subscribe(() => saveData(store.getState()));