import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // // There is no business after, thats why we don't need await
  // userIds.forEach((userId) => dispatch(fetchUser(userId)));

  // Refactor
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((userId) => dispatch(fetchUser(userId)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// // For every request,
// // It will run 1 in the app time for id
// // If inside data could change, we would NOT catch the new values
// // If we want to fetch changes, we need to declare new actionCreator without memoize
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
