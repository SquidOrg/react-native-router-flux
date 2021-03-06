import { combineReducers } from 'redux';

// Reducers
import { authReducer } from './modules/auth';
import { firebaseReducer } from './modules/firebase';
import { notificationReducer } from './modules/notification';
import { tasksReducer } from './modules/tasks';


export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  notification: notificationReducer,
  tasks: tasksReducer
});
