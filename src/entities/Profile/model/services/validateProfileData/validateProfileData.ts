import { ValidateProfileError, Profile } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return ['NO_DATA'];
    }
    const {
        age, first, lastname,
    } = profile;
    const errors: ValidateProfileError[] = [];
    if (!first || !lastname) {
        errors.push('INCORRECT_USER_DATA');
    }

    if (!age || !Number.isInteger(age)) {
        errors.push('INCORRECT_AGE');
    }

    return errors;
};
