import { READ_EVENTS } from '../actions';
import _ from 'lodash';
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
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
    default:
      return events;
  }
};
