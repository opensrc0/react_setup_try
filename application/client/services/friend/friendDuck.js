import * as friendService from './friendService';
const FRIEND_LIST = 'FRIEND_LIST';

const initialState = {
    byId: {
      0: {
        id: '',
        amount: '',
      },
    },
    ids: [],
  };

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FRIEND_LIST:
      return {
        ...state,
        byId: payload.byId,
      };

    default:
      return state;
  }
};

export const friendList = () => ({
  type: FRIEND_LIST,
  payload: friendService.transformFriendList,
});
