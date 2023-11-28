import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    it('should return data', () => {
        const store = {
            profile: {
                isLoading: false,
            },
        } as StateSchema;
        const data = getProfileIsLoading(store);
        expect(data).toEqual(false);
    });
    it('should work with empty state', () => {
        const store = {} as StateSchema;
        expect(getProfileIsLoading(store)).toEqual(undefined);
    });
});
