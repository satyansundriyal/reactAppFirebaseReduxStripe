const INITIAL_STATE={currentUser:null};
const userReducer=(state=INITIAL_STATE,action)=>{
   debugger;
    switch(action.type)
    {
        case "SET_CURRENT_USER":
            return  {

                ...state,
                currentUser:action.payload
            }
             break;
        default:
        return state;
        
    }

}
export default userReducer;