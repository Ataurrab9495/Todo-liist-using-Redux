import {ADDTODO, REMOVE_TODO ,UPDATE_TODO} from "../Constant"

const initialState={
    todos:[]
}
 const addToDoData = (state = initialState , action) =>{
    switch(action.type){
        case ADDTODO:
            const {id , data} = action.payload;

            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                    id:id, 
                    data:data
                }]
            } 
            break;

        case REMOVE_TODO:
            const newlist = state.todos.filter((item) => item.id !== action.id)
            return{
                ...state,
                todos:newlist   
            }
            break;

        case UPDATE_TODO:
                const updatedTodo = state.todos.map((todo) =>{
                    if(todo.id !== action.payload.id){
                        return{
                            ...todo,
                            data:action.payload.data
                        }
                    }
                    return todo
                });
                return {
                    ...state,
                    todos:updatedTodo
                }
            break;

            default:
                return state;
    }
}

export default addToDoData