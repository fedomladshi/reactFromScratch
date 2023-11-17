import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(loginReducer(
          state as LoginSchema,
          loginActions.setUsername('username'),
        )).toEqual({ username: 'username' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123123' };
        expect(loginReducer(
          state as LoginSchema,
          loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
