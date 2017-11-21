import axios from 'axios';

import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
} from './mutation-types';

const API_BASE = 'http://localhost:8000/api/0';

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);
    axios.get(`${API_BASE}/products/`).then(response => commit(ALL_PRODUCTS_SUCCESS, response.data));
  },
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(ALL_MANUFACTURERS);
    axios.get(`${API_BASE}/manufacturers/`).then(response => commit(ALL_MANUFACTURERS_SUCCESS, response.data));
  },
};
