import axios from "axios";

export const GET_LIST_CHUYEN = "GET_LIST_CHUYEN";
export const GET_LIST_CHUYEN_ERR = "GET_LIST_CHUYEN_ERR";
export const GET_LIST_CHUYEN_SUCCESS = "GET_LIST_CHUYEN_SUCCESS";

export const CHUYEN_XE_UPDATE = "CHUYEN_XE_UPDATE";
export const BOOKING_CHUYEN = "BOOKING_CHUYEN";

/* Map du lieu tu socket tra ve cho */
export const initialChuyen = res => ({
  type: GET_LIST_CHUYEN_SUCCESS,
  items: res
});
export const updateList = res => ({
  type: res.type,
  res
});
/** *************************************************************************************** */
/* Async Action 1 Chuyen using - Sockets													*/
/**  ************************************************************************************** */

export const loadDataChuyenFromSocket = socket => {
  return dispatch => {
    // can sua lai URI emit
    // dispatch(clearAllItems())
    socket.emit("loadchuyenxe");
    console.log('=================emit roi===================');
    console.log('emit');
    console.log('====================================');
    dispatch({ type: GET_LIST_CHUYEN });
  };
};

export const pickChuyenXe = (socket, idUser, idChuyen) => {
  return dispatch => {
    let data = { socket, idUser, idChuyen };
    socket.emit("pickchuyen", data);
  };
};
