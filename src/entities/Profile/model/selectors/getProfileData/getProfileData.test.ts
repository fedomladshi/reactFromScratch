import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    it('should return data', () => {
        const store = {
            profile: {
                data: {
                    age: 24,
                    city: 'Minsk',
                    first: 'Alexey',
                    country: 'Belarus',
                    lastname: 'Fedorovich',
                    currency: 'USD',
                },
            },
        } as StateSchema;
        const data = getProfileData(store);
        expect(data).toEqual(store.profile?.data);
    });
    it('should work with empty state', () => {
        const store = {} as StateSchema;
        expect(getProfileData(store)).toEqual(undefined);
    });
});
