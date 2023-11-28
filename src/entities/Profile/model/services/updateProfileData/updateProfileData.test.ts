import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Profile, ProfileSchema } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data: Profile = {
    age: 24,
    city: 'Minsk',
    first: 'Alexey',
    country: 'Belarus',
    lastname: 'Fedorovich',
    currency: 'USD',
};

describe('updateProfileData.test', () => {
    it('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({
            data: { ...data, age: 23 },
        }));
        const res = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual({ ...data, age: 23 });
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const res = await thunk.callThunk();
        expect(res.meta.requestStatus).toBe('rejected');
        expect(res.payload).toEqual(['SERVER_ERROR']);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, lastname: undefined } } });
        thunk.api.put.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const res = await thunk.callThunk();
        expect(res.meta.requestStatus).toBe('rejected');
        expect(res.payload).toEqual(['INCORRECT_USER_DATA']);
    });
});
