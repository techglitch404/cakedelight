import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cakeSaga from "./products/saga";
import { rootReducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});


sagaMiddleware.run(cakeSaga);