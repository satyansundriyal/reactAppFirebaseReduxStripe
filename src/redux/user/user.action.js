import USER_ACTIONS from './user-action-types';
const setCurrentUser=user =>({
  type:USER_ACTIONS.SET_CURRENT_USER,
  payload:user
});
export default setCurrentUser