import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername selector', () => {
    test('should return loading status', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { username: 'username' } };

        expect(getLoginUsername(state as StateSchema)).toEqual(state?.loginForm?.username);
    });

    test('should work with emty state ', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
