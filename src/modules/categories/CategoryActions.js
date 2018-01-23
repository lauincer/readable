import * as ReadableAPIUtil from '../../utils/api';
import { RECEIVE_CATEGORIES } from './CategoryActionTypes';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  ReadableAPIUtil
      .fetchCategories()
      .then(categories => dispatch(receiveCategories(categories)))
);
