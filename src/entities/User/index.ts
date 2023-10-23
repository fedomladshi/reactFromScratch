import { getAuthUserData } from './model/selectors/getAuthUserData/getAuthUserData';
import { UserSchema, User } from './model/types/user';
import {
    userSlice,
    userReducer,
    userActions,
} from './model/slice/userSlice';

export {
    getAuthUserData,
    userSlice,
    userReducer,
    userActions,
    UserSchema,
    User,
};
