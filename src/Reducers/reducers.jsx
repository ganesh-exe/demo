import { combineReducers } from "redux";

const initState=[]

export const CardsReducer=(state=initState,action)=>{
    switch(action.type)
    { 
    case("ADD"):
         return [...state,action.payload]

    case("LIKE"):
         {
             state.forEach(item=>{
                 if(item.Id===action.payload)
                 {
                     item.Likes=item.Likes+1;
                     console.log(item)
                 }
             })
             return state}
        default:
            return state;
    }
}

export const rootreducer=combineReducers({
    Cards:CardsReducer
});

        