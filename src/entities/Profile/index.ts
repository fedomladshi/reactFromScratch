import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';

export { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';

export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';

export {
    Profile,
    ProfileSchema,
    fetchProfileData,
    ProfileCard,
};

export {
    ProfileActions,
    ProfileReducer,
} from './model/slice/profileSlice';
