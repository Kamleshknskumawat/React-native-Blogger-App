import { UserController } from '_controllers';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FORGOT_PASSWORD:'LOGIN_FORGOT_PASSWORD'
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});


const forgotPasswordSuccess = () => ({
  type: TYPES.LOGIN_FORGOT_PASSWORD,
  payload: null,
});
export const login = (username, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(username, password);
    //console.log("user:"+user);
    //console.log(user);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const forgotPassword = () => async dispatch => {
  //console.log("forgotPassword");
  try {
    //console.log("UserController");
    await UserController.forgotPassword();
  } finally {
    //console.log("  dispatch(forgotPasswordSuccess())");
    dispatch(forgotPasswordSuccess());
  }
};

export const logout = () => async dispatch => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};
