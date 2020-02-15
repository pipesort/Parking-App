const reducer = function(
    state = {
      isClicked: false
    },
    action,
  ) {
    if (action.type === 'CLICKED') return {...state, isClicked: true};
   
    return state;
  };
  
  export default reducer;