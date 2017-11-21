import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
} from './mutation-types';

// eslint-disable-next-line
/* eslint no-param-reassign: [ "error", {"props": true, "ignorePropertyModificationsFor": ["state", "payload"]}] */

export const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.products = payload;
  },
};

export const manufacturerMutations = {
  [ALL_MANUFACTURERS](state) {
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.manufacturers = payload;
  },
};
