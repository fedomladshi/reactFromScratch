import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    it('should return data', () => {
        const store = {
            profile: {
                error: 'error',
            },
        } as StateSchema;
        const data = getProfileError(store);
        expect(data).toEqual('error');
    });
    it('should work with empty state', () => {
        const store = {} as StateSchema;
        expect(getProfileError(store)).toEqual(undefined);
    });
});
