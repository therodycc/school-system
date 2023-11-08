import { combineReducers } from 'redux';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import accountReducer from '../slices/account/accounts.slice';

// reducers
import debtsReducer from '../slices/debts.slice';
import fixedCostsReducer from '../slices/fixed-costs.slice';
import meReducer from '../slices/me.slice';

const createNoopStorage = () => ({
    getItem() {
        return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
        return Promise.resolve(value);
    },
    removeItem() {
        return Promise.resolve();
    }
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: []
};


const rootReducer = combineReducers({
    debts: debtsReducer,
    me: meReducer,
    fixedCosts: fixedCostsReducer,
    account: accountReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export { rootReducer, rootPersistConfig };
