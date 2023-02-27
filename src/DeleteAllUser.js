import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './UserSlice';

const DeleteAllUser = () => {
    const dispatch =  useDispatch()
   
    return (
        <div>
            
             <button onClick={()=> dispatch(deleteUser())}>Clear All Users</button>
        </div>
    );
};

export default DeleteAllUser;