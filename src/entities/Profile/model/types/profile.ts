import { Country } from '../../../Country/model/types/country';
import { Currency } from '../../../Currency/model/types/currency';

export type ValidateProfileError = 'INCORRECT_USER_DATA'
     | 'INCORRECT_AGE'
     | 'NO_DATA'
     | 'SERVER_ERROR';
export interface Profile {
     first?: string,
     lastname?: string,
     age?: number,
     currency?: Currency,
     country?: Country,
     city?: string,
     username?: string,
     avatar?: string
}
export interface ProfileSchema {
     data?: Profile;
     form?: Profile;
     isLoading: boolean;
     error?: string;
     readonly: boolean;
     validateErrors?: ValidateProfileError[];
}
