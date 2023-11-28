import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';
import { ProfileActions, ProfileReducer } from './profileSlice';

const data: Profile = {
    age: 24,
    city: 'Minsk',
    first: 'Alexey',
    country: 'Belarus',
    lastname: 'Fedorovich',
    currency: 'USD',
};

describe('profileSlice.test', () => {
    test('test setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(ProfileReducer(
          state as ProfileSchema,
          ProfileActions.setReadOnly(false),
        )).toEqual({ readonly: false });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false, form: { username: '' }, data };
        expect(ProfileReducer(
        state as ProfileSchema,
        ProfileActions.cancelEdit(),
        )).toEqual({
            readonly: true, form: data, data, validateErrors: undefined,
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false };
        expect(ProfileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
        )).toEqual({ isLoading: true });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false };

        expect(ProfileReducer(
    state as ProfileSchema,
    updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            error: undefined,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
