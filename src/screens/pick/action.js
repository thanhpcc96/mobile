import axios from "axios";

export const GET_LIST_CHUYEN = "GET_LIST_CHUYEN";
export const GET_LIST_CHUYEN_ERR = "GET_LIST_CHUYEN_ERR";
export const GET_LIST_CHUYEN_SUCCESS = "GET_LIST_CHUYEN_SUCCESS";

/** socket.broadcast.emit('listChuyenChanged',{idChuyen: updateChuyen._id, dadat: updateChuyen.dadat}); */
export const LIST_CHUYEN_HAD_CHANGED= "LIST_CHUYEN_HAD_CHANGE"

// export const CHUYEN_XE_UPDATE = "CHUYEN_XE_UPDATE";
export const BOOKING_CHUYEN = "BOOKING_CHUYEN";

/**
 * 
 * @param {oject} res -- xu ly du lieu khi load ve client
 *   socket emit ERR     {
            type: 'GET_LIST_CHUYEN_ERR',
            error: 'Khong load duoc',
            }
      socket emit SUCCESS { 
          type: 'GET_LIST_CHUYEN_SUCCESS',
          result: listchuyen,,
          }
 */
export const resultLoadingChuyen = res => {
  const { type } = res;
  return dispatch => {
    if (type === GET_LIST_CHUYEN_ERR) {
      return dispatch({
        type: GET_LIST_CHUYEN_ERR,
        error: res.error,
      });
    }
    if (type === GET_LIST_CHUYEN_SUCCESS) {
      return dispatch({
        type: GET_LIST_CHUYEN_SUCCESS,
        items: res.result,
      });
    }
  };
  // type: GET_LIST_CHUYEN_SUCCESS,
  // 
};

/** *************************************************************************************** */
/* Async Action 1 Chuyen using - Sockets													*/
/**  ************************************************************************************** */

export const loadDataChuyenFromSocket = (socket, clientID) => {
  return dispatch => {
    // can sua lai URI emit
    // dispatch(clearAllItems())
    socket.emit("loadchuyenxe", clientID);
    console.log('=================emit roi===================');
    console.log('emit');
    console.log('====================================');
    dispatch({ type: GET_LIST_CHUYEN });
  };
};

export const reloadDatachuyenChanged = res => {
  // {idChuyen, dadat}
  return dispatch => dispatch({
    type: LIST_CHUYEN_HAD_CHANGED,
    chuyenHadChanged: res,
  });
}

export const pickChuyenXe = (socket, idUser, idChuyen, vitribatdau, vitriketthuc) => {
  return dispatch => {
    const data = { socket, idUser, idChuyen, vitribatdau, vitriketthuc };
    socket.emit("pickchuyen", data);
    dispatch({ type: BOOKING_CHUYEN });
  };
};
