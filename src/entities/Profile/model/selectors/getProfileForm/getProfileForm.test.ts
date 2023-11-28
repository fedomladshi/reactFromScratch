import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    it('should return data', () => {
        const store = {
            profile: {
                form: {
                    age: 24,
                    city: 'Minsk',
                    first: 'Alexey',
                    country: 'Belarus',
                    lastname: 'Fedorovich',
                    currency: 'USD',
                },
            },
        } as StateSchema;
        const data = getProfileForm(store);
        expect(data).toEqual(store.profile?.form);
    });
    it('should work with empty state', () => {
        const store = {} as StateSchema;
        expect(getProfileForm(store)).toEqual(undefined);
    });
});
