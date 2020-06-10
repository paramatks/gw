import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../_reducers/rootReducer"
import thunk from "redux-thunk";
import {createWrapper} from 'next-redux-wrapper';

const makeStore = context => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore, {debug: false});