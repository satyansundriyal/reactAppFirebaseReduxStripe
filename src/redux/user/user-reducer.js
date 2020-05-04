import USER_ACTIONS from './user-action-types';
const INITIAL_STATE={currentUser:null};
const userReducer=(state=INITIAL_STATE,action)=>{
   debugger;
    switch(action.type)
    {
        case USER_ACTIONS.SET_CURRENT_USER:
            return  {

                ...state,
                currentUser:action.payload
            }
             
        default:
        return state;
        
    }

}
export default userReducer;