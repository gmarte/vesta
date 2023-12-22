'use client'
import React, { useEffect } from 'react'
import Items from './Items'
import { useStore } from '@/store/store'
import Loading from './Loading'

const Initiate = () => {    
    const { transactionID, isLoading, setTransactionID } = useStore();
    const onClick = () => {  navigator.clipboard.writeText(transactionID) };
    useEffect(() => {
        // Function to dynamically load the VestaJS script
        const loadVestaScript = () => {
          const script = document.createElement('script');
          script.src = 'https://platform.vesta.io/js/static/dcExtension.js';
          script.onload = () => initializeVesta(); // Initialize Vesta after the script loads
          document.body.appendChild(script);
        };
    
        // Function to initialize Vesta
        const initializeVesta = () => {
          if (window.VestaDataCollector) {
            window.VestaDataCollector.initiateDC(
              'bonosccn.do', 
              'SANDBOX', 
              'Bonos%20CCN',
              { 
                productReference: 'Guarantee', 
                targetCustomerDomainName: 'bonosccn.do'
              }
            ).then(transactionId => {
              setTransactionID(transactionId);
              console.log("Vesta initialized. Transaction ID:", transactionId);
              // You can handle the transactionId here (e.g., save it to your state)
            }).catch(error => {
              console.error("Error initializing Vesta:", error);
            });
          }
        };
    
        loadVestaScript();
      }, []); 
      if (isLoading) {
        return (
          <Loading />
        );
      }
  return (
    <Items
        url='#'
        onClick={onClick}
        over={transactionID}
        title='2. Initiate'
        description={transactionID}
     />
  )
}

export default Initiate