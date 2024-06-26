import api from "../../api"

const prosesTesting = ()=>{
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(true)
  }, 2000)
})
 
}

export const increment = ()=>{
  return {type: 'INCREMENT'}
}

export const decrement = ()=>{
  return {type: 'DECREMENT'}
}

export const changeName = (val)=>async(dispatch)=>{

  await prosesTesting()
  dispatch({
    type: 'CHANGE_NAME',
    payload: val
  })

}

