import { v4 as uuidv4 } from 'uuid';

const state = {
  notifications: [],
};
const getters = {
  allNotifications: state => state.notifications,
};
const actions = {
  addNotification: ({commit}, info) => {
    const newNotification = {
      id: uuidv4(),
      title: info.title,
      text: info.text,
    };

    commit('addNotification', newNotification);
  },
  rmNotification: ({commit}, id) => commit('rmNotification', id),
};
const mutations = {
  addNotification: (state, newNotification) => {
    state.notifications.push(newNotification);
  },
  rmNotification: (state, id) => {
    state.notifications = state.notifications.filter(
      notification => notification.id !== id
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};