import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKeys } from '1app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer;
}

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeOnUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeOnUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, reducers, removeOnUnmount, store.reducerManager]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
