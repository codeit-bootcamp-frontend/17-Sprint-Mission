export const FORM_INITIAL_VALUES = {
  imgFile: null,
  title: '',
  description: '',
  price: 0,
  tags: [],
};
export const formReducerType = {
  EDIT_FORM_VALUE: 'EDIT_FORM_VALUE',
  ADD_TAG: 'ADD_TAG',
  REMOVE_TAG: 'REMOVE_TAG',
};
export default function formReducer(state, action) {
  switch (action.type) {
    case formReducerType.EDIT_FORM_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case formReducerType.ADD_TAG: {
      return {
        ...state,
        tags: [...state.tags, action.tagToAdd],
      };
    }
    case formReducerType.REMOVE_TAG: {
      const newTags = state.tags.filter((tag) => tag !== action.tagToRemove);
      return {
        ...state,
        tags: newTags,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
