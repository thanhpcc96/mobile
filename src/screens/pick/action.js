import axios from "axios";

export const GET_LIST_CHUYEN = "GET_LIST_CHUYEN";
export const GET_LIST_CHUYEN_ERR = "GET_LIST_CHUYEN_ERR";
export const GET_LIST_CHUYEN_SUCCESS = "GET_LIST_CHUYEN_SUCCESS";

/** socket.broadcast.emit('listChuyenChanged',{idChuyen: updateChuyen._id, dadat: updateChuyen.dadat}); */
export const LIST_CHUYEN_HAD_CHANGED = "LIST_CHUYEN_HAD_CHANGE";

// export const CHUYEN_XE_UPDATE = "CHUYEN_XE_UPDATE";
export const BOOKING_CHUYEN = "BOOKING_CHUYEN";
export const BOOK_CHUYEN_ERROR = "BOOK_CHUYEN_ERROR";
export const BOOK_CHUYEN_SUCCESS = "BOOK_CHUYEN_SUCCESS";

export const GET_CHUYEN_DETAIL = "GET_CHUYEN_DETAIL";
export const GET_CHUYEN_DETAIL_ERROR = "GET_CHUYEN_DETAIL_ERROR";
export const GET_CHUYEN_DETAIL_SUCCESS = "GET_CHUYEN_DETAIL_SUCCESS";

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
        error: res.error
      });
    }
    if (type === GET_LIST_CHUYEN_SUCCESS) {
      return dispatch({
        type: GET_LIST_CHUYEN_SUCCESS,
        items: res.result
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
    console.log("=================emit roi===================");
    console.log("emit");
    console.log("====================================");
    dispatch({ type: GET_LIST_CHUYEN });
  };
};

export const reloadDatachuyenChanged = res => {
  // {idChuyen, dadat}
  return dispatch =>
    dispatch({
      type: LIST_CHUYEN_HAD_CHANGED,
      chuyenHadChanged: res
    });
};

export const pickChuyenXe = (data, socket) => {
  return dispatch => {
    // const data = { idUser, idChuyen, vitribatdau, vitriketthuc };
    socket.emit("pickchuyen", data);
    dispatch({ type: BOOKING_CHUYEN });
  };
};

/**
 * 
 *   ERR: {type: 'BOOK_CHUYEN_ERROR',
          error: new Error('Loi! pick chuyen khong thanh cong')
          }
     Sucess: type: 'BOOK_CHUYEN_SUCCESS',
        result: kqTicketCreate, 
    
 */
export const handlePickChuyenResult = res => {
  const { type } = res.type;
  return dispatch => {
    if (type === BOOK_CHUYEN_ERROR) {
      return dispatch({
        type: BOOK_CHUYEN_ERROR,
        error: res.error
      });
    }
    if (type === BOOK_CHUYEN_SUCCESS) {
      return dispatch({
        type: BOOK_CHUYEN_SUCCESS,
        ticket: res.result
      });
    }
  };
};

export const getChuyenDetailAction = (socket, idchuyen) => {
  return dispatch => {
    socket.emit("chuyenDetail", idchuyen);
    return dispatch({
      type: GET_CHUYEN_DETAIL
    });
  };
};

export const handleResultGetChuyenDeTail = res => {
  const { type } = res;
  return dispatch => {
    if (type === GET_CHUYEN_DETAIL_SUCCESS) {
      return dispatch({
        type: GET_CHUYEN_DETAIL_SUCCESS,
        chuyenDetail: res.result,
      });
    }
    if (type === GET_CHUYEN_DETAIL_ERROR) {
      return dispatch({
        type: GET_CHUYEN_DETAIL_ERROR,
        chuyenDetail: res.error,
      });
    }
  };
};
