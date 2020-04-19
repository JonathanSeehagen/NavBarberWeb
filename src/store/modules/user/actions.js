import {
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from './actionsTypes';

export function updateProfileRequest(data) {
  return {
    type: USER_UPDATE_PROFILE_REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: USER_UPDATE_PROFILE_SUCCESS,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: USER_UPDATE_PROFILE_REQUEST,
  };
}
