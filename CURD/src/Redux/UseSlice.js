import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:'user',
    initialState:{
        data:[]
    },
    reducers:{
        addUser(state,action){
            state.data.push(action.payload)
        },

        // user edit 
        updateUser(state,action){
            let temp=state.data
            temp.map((item,index)=>{
                if(index==action.payload.index){
                    item.name=action.payload.name
                    item.email=action.payload.email
                    item.mobile=action.payload.mobile
                    item.address=action.payload.address
                    item.gender=action.payload.gender
                    item.qualification=action.payload.qualification
                
                }
            })
            state.data=temp
        },
        deleteuser(state,action){
         let temp=state.data
         let final=temp.filter((item,index)=>{
            return index != action.payload
         })
         state.data=final
        }


    }

})
export const {addUser,updateUser,deleteuser}=UserSlice.actions
export default UserSlice.reducer


