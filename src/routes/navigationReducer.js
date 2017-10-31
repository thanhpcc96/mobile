import { router } from './index';

export default function navigationReducer(state, action) {
  const newState = router.getStateForAction(action, state);
  return newState || state;
}
