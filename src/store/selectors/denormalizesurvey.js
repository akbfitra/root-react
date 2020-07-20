import {denormalize} from 'normalizr';

import survey from '../models/schema';

export const getDenormalizedSurvey = (state) => {
  return denormalize(Object.keys(state.surveys)[0], survey, {...state});
};

