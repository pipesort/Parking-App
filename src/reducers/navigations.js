const reducer = function(
    state = {
      isClicked: false
    },
    action,
  ) {
    if (action.type === 'CLICKED') return {...state, isClicked: true};
    if (action.type === 'HOME') return {...state, isClicked: false};
    return state;
  };
  
  export default reducer;