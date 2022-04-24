export const todoReducer = (state=[],action) => { 

    switch (action.type) {
        case 'add':
            return [...state,action.payload];
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload.id);
        case 'toggle':
        return state.map((el) => { 

            if(el.id === action.payload.id){
                return{
                    ...el,
                    done:!el.done
                }
            }
            else{
                return el;
            }

         });
    
        default:
            return state;
    }

 }