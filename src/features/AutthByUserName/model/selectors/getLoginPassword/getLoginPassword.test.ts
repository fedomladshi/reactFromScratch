import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword selector', () => {
    test('should return loading status', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { password: 'password' } };

        expect(getLoginPassword(state as StateSchema)).toEqual(state.loginForm.password);
    });

    test('should work with emty state ', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
