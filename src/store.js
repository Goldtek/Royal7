// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";

// import rootReducer from "./redux/reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const middlewares = [thunk];
// const enhancers = applyMiddleware(...middlewares);

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, compose(enhancers));
// const persistor = persistStore(store);

// export { store, persistor };

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "./redux/reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "User",
  storage: storage,
  whitelist: ["User"], // which reducer want to store
};
const initialState = {};

const middleware = [logger, thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const persistor = persistStore(store);

export { store, persistor };
