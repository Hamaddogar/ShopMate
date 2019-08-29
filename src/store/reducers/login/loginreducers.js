const loginFormReducers = ((state = [], action) => {
  
debugger;
    switch (action.type) {

        case 'loginaction':
    
            return {...state, ...action.payloed}
                  
        default:
            return state


    }


})
 export  default loginFormReducers;