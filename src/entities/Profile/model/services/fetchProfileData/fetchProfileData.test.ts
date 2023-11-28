import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const returnValue = {
    age: 24,
    city: 'Minsk',
    first: 'Alexey',
    country: 'Belarus',
    lastname: 'Fedorovich',
    currency: 'USD',
};

describe('fetchProfileData.test', () => {
    it('should return data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: returnValue,
        }));
        const res = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(returnValue);
    });
    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const res = await thunk.callThunk();
        expect(res.meta.requestStatus).toBe('rejected');
    });
});
