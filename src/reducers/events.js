import {
  READ_EVENTS,
  DELETE_EVENT,
  CREATE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from '../actions';
import _ from 'lodash';
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      // action.response.dataこんな感じ
      // {
      //   'id': Number,
      //   'title': String,
      //   'body': String
      // } []
      // 扱いづらいのでこういう配列にlodash使って変更する
      // {
      //   [key: number]: {
      //     // 上記の中身
      //   }
      // }
      // console.log(action.response.data);
      return _.mapKeys(action.response.data, 'id');
    case READ_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
