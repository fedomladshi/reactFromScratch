import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
    it('should return data', () => {
        const store = {
            profile: {
                readonly: true,
            },
        } as StateSchema;
        const data = getProfileReadOnly(store);
        expect(data).toEqual(true);
    });
    it('should work with empty state', () => {
        const store = {} as StateSchema;
        expect(getProfileReadOnly(store)).toEqual(undefined);
    });
});
