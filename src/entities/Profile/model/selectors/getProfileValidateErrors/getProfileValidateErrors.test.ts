import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    it('should return data', () => {
        const store = {
            profile: {
                validateErrors: ['INCORRECT_AGE'],
            },
        } as StateSchema;
        const data = getProfileValidateErrors(store as StateSchema);
        expect(data).toEqual(store.profile?.validateErrors);
    });
    it('should work with empty state', () => {
        const store = {} as StateSchema;
        expect(getProfileValidateErrors(store)).toEqual(undefined);
    });
});
