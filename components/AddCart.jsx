'use client'
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store'; 
import Items from './Items';
import Loading from './Loading';
import putAddCart from '@/lib/putAddCart';


const AddCart = () => {
  const { accessToken, transactionID, isLoading, setIsLoading } = useStore((state) => ({
    accessToken: state.accessToken,    
    transactionID: state.transactionID,    
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading
  }));
  
  const onClick = async () => { 
    try {
        const data = await putAddCart(accessToken,transactionID);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch access token:', error);
        // Handle error appropriately
      }
   };  

  if (isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <Items
        url='#'
        onClick={onClick}
        over='add to cart'
        title='3. Add Cart'
        description='Funcionality to add to cart'
     />

  );
};

export default AddCart;
