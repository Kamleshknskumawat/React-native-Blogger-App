import { TYPES } from '_actions/UserActions';

const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      //console.log("-----------------");
      //console.log(state);
      //console.log(payload);
      //console.log(type);
      //console.log(payload.user);

      //console.log("-----------------");
      return { ...state, ...payload.user };
    case TYPES.CLEAR_STORE:
      return {};
    case TYPES.LOGIN_FORGOT_PASSWORD:
      //console.log(state);
      //console.log(payload);
      //console.log(type);
      return {};
    default:
      return state;
  }
};

export default userReducer;
