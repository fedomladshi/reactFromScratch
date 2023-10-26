import { useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

export type ReducersList = {
     [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

export const useDynamicReducerLoader = (reducers: ReducersList, removeAfterUnmount?: boolean) => {
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        const data = Object.entries(reducers) as ReducerListEntry[];
        data.forEach(([key, reducer]) => {
            store.reducerManager.add(key, reducer);
            store.dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                data.forEach(([key]) => {
                    store.reducerManager.remove('loginForm');
                    store.dispatch({ type: `@DESTROY DYNAMIC ${key} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
