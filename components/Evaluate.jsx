'use client'
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store'; 
import Items from './Items';
import Loading from './Loading';
import putAddCart from '@/lib/putAddCart';

import { toast } from 'react-toastify';
import postEvaluate from '@/lib/postEvaluate';


const Evaluate = () => {
  const { accessToken, transactionID, isLoading } = useStore((state) => ({
    accessToken: state.accessToken,    
    transactionID: state.transactionID,    
    isLoading: state.isLoading,    
  }));
  
  const onClick = async () => { 
    try {
        const data = await postEvaluate(accessToken,transactionID);
        console.log(data);
        toast.success(`Transaction evaluación: ${data.data.evaluationDecision}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
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
        title='6. Evaluate'
        description='Transaction evaluate POST payment page'
     />
  )
}

export default Evaluate