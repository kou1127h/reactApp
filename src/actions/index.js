import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';
// react-thunkがない場合はActionCreatorは非同期処理できない（関数を返せない）
// アロー関数の戻り値にアロー関数（async）を指定

export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};