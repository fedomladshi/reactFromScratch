import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsError } from './getLoginIsError';

describe('getLoginIsErrror selector', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { error: 'Error' } };

        expect(getLoginIsError(state as StateSchema)).toEqual('Error');
    });

    test('should work with emty state ', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginIsError(state as StateSchema)).toEqual('');
    });
});
