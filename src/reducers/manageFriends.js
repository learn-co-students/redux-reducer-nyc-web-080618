export function manageFriends(state, action){

  switch (action.type){
    case ("ADD_FRIEND"):
      return {friends: [...state.friends, action.friend]}
      break

    case ("REMOVE_FRIEND"):
        let indexToRemove = state.friends.findIndex((friend)=>{
          return action.id == friend.id
        })
        

        return {friends: [...state.friends.slice(0, indexToRemove),...state.friends.slice(indexToRemove+1)]}
        break

    default:
    return state
  }




}
