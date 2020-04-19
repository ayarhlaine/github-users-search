
import { applyMiddleware,createStore,combineReducers } from 'redux'
import { GitUserProp,gitUserReducer } from '../GitUser/GitUser.dux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export interface AppState {
    git_user: GitUserProp;
  }
const rootReducer = combineReducers<AppState> ({
    git_user: gitUserReducer
});

export const configureStore = () =>{
    const middleWareEnhancer = applyMiddleware(thunk);
    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
    return store;
};

export default configureStore;