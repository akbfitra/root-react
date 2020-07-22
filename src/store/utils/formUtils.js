export const bindFormDataToState = ({formFields, state}) => {
  return Object.keys(state).reduce((result, nextKey) => {
    if (formFields[nextKey]) {
      result[nextKey] = {
        ...state[nextKey],
        title: formFields[nextKey]
      }
    } else {
      result[nextKey] = state[nextKey];
    }
    console.log(result, 'form utils')

    return result;
  }, {});
};