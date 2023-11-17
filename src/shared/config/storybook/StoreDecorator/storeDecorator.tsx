import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ProfileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AutthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/hooks/useDynamicReducerLoader/useDynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: ProfileReducer,
};

export const storeDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
