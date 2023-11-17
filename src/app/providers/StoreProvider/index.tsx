import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';

export {
    StoreProvider, createReduxStore,
};

export type {
    StateSchema, ReduxStoreWithManager, StateSchemaKey, ThunkConfig,
} from './config/StateSchema';
