'use client'
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store/store'; 
import fetchAccessToken from '@/lib/fetchAccessToken'; // adjust the path as necessary
import Items from './Items';
import Loading from './Loading';


const AccessTokenFetcher = () => {
  const { accessToken, setAccessToken, isLoading, setIsLoading } = useStore((state) => ({
    accessToken: state.accessToken,
    setAccessToken: state.setAccessToken,
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading
  }));
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const onClick = () => {  navigator.clipboard.writeText(accessToken) };

  useEffect(() => {
    const getToken = async () => {
        setIsLoading(true); // Start loading      
        // await delay(2000); // 5000 milliseconds = 5 seconds  
      try {
        const data = await fetchAccessToken();
        setAccessToken(data.accessToken);
      } catch (error) {
        console.error('Failed to fetch access token:', error);
        // Handle error appropriately
      }
      setIsLoading(false); // End loading
    };
    getToken();
  }, [setAccessToken, setIsLoading]); 

  // Function to truncate the token for display
  const truncatedToken = (token) => {
    if (typeof token === 'string' && token.length > 20) {
      return `${token.substring(0, 20)}...`;
    }
    return token || 'No token'; // Replace 'No token' with a placeholder or message you prefer
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
        over={accessToken}
        title='1. VESTA Token'
        description={truncatedToken(accessToken)}
     />

  );
};

export default AccessTokenFetcher;
