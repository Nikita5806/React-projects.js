import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice'

export default configureStore({
  reducer: {
    paste : pasteReducer,
  },
})
!*pasteSlice*!
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
pastes:localStorage.getItem("pastes")
? JSON.parse(localStorage.getItem)
("pastes"):[]

}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState: 
  reducers: {
 addToPastes: (state, action) => {
     
 },
    UpdateToPastes: (state, action) =>{ 

    },
resetAllPastes:(states, action ) =>{

},
   removeFromPastes : (state,action)  =>{

   },
  },
})
// Action creators are generated for each case reducer function
export const {addToPastes ,UpdateToPastes , resetAllPastes, removeFromPaste } = counterSlice.actions

export default pasteSlice.reducer
