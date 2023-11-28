import { validateProfileData } from './validateProfileData';

describe('fetchProfileData.test', () => {
    it('should return no data', async () => {
        expect(validateProfileData()).toEqual(['NO_DATA']);
    });
    test('incorrect age', async () => {
        expect(validateProfileData({ first: 'Name', lastname: 'Surname' })).toEqual(['INCORRECT_AGE']);
    });
    test('incorrect user data', async () => {
        expect(validateProfileData({ age: 23 })).toEqual(['INCORRECT_USER_DATA']);
    });
    test('success', async () => {
        expect(validateProfileData({ age: 23, first: 'Name', lastname: 'Surname' })).toEqual([]);
    });
});
