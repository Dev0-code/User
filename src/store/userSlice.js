import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser:(state,action)=>{
      state.users.push(action.payload)
// console.log(action.payload);

    },
    editUser:(state,action)=>{
      const {id,updatedData}=action.payload
      const userToUpdate=state.users.find((item)=>item.id==id)
      if(userToUpdate){
        userToUpdate.name=updatedData.name
        userToUpdate.email=updatedData.email
        userToUpdate.phone=updatedData.phone
        userToUpdate.address=updatedData.address
      }else{
        alert("User  not found");
      }
    },
    deleteUser:(state,action)=>{
      state.users=state.users.filter((item)=>item.id!=action.payload)
    }
  },
});


export const {addUser,editUser,deleteUser}=userSlice.actions
export default userSlice.reducer;
