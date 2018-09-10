const BILL_LIST = 'BILL_LIST';

const initialState = {
  isSearchWidgetOpen: false,
  isProccedToBook: false,
  isPerfectStayBannerOpen: false,
  utmParams: {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BILL_LIST:
      return {
        ...state,
        isSearchWidgetOpen: payload.show,
      };

    default:
      return state;
  }
};

export const billList = (show) => ({
  type: BILL_LIST,
  payload: { show },
});
