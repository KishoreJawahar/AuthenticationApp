import {combineReducers} from "redux";
import PhotosReducer from './AuthReducers';
import * as Types from "../Actions/Types";
import storage from "redux-persist/es/storage";

const appReducer = combineReducers({
   AuthState: PhotosReducer
});

const rootReducer = (state, action) => {

   if (action.type === Types.LOGOUT) {
      Object.keys(state).forEach(key => {
         storage.removeItem(`persist:${key}`);
      });
      state = undefined
   }
   return appReducer(state, action);
};
export default rootReducer;
