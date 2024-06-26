import api from "../../api";

export const getWorker = ()=>async (dispatch)=>{
  try {
    dispatch({type: 'GET_WORKERS_REQUEST'})
    const response = await api.get('/workers')
    const workers = response.data.data
    dispatch({
      type: 'GET_WORKERS_SUCCESS',
      payload: workers
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type:'GET_WORKERS_FAILURE',
      payload: error.response
    })
  }
}