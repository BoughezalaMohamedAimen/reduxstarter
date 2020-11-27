const DEFAULT_STATE = [{counter:0,value:3}]

const counterReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return [{...state[0],counter:state[0].counter+state[0].value}];
    case "DECREMENT":
      return [{...state[0],counter:state[0].counter-state[0].value}];
  }
  return state;
};

export default counterReducer;
