import { combineReducers } from "redux";
import CartRed from "./CartRed";
import CounterRe from "./CounterRe";

const RootRed = combineReducers({
  count:CartRed,
  counter: CounterRe,

});

export default RootRed;