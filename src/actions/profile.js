import createAsyncActions from './createAsyncActions';

const identifier = '@@prof/';

// ACTIONS
export const fetchProfileDataActions = createAsyncActions(
  identifier,
  'FETCH_PROFILE_DATA'
);

// ACTION CREATORS
export const fetchProfileData = () => ({
  type: fetchProfileDataActions.request
});
