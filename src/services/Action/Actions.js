import { ADDTODO,REMOVE_TODO,UPDATE_TODO } from '../Constant'

export const addToDo = (data) => {
    return {
        type: ADDTODO,
        payload: {
            id:new Date().getTime().toString(),
            data: data
        }
    }
}

export const removeToDo = (id) => {
    return{
        type:REMOVE_TODO,
        id:id
    }
}

export const updateToDo = (data,id) => {
    console.log("action:- "+data)
    return{
        type:UPDATE_TODO,
        payload:{
            data:data,
            id:id
        }
    }
}