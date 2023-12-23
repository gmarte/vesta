'use client'
import { useStore } from '@/store/store';
import Items from './Items'
import { useEffect } from 'react';
import Loading from './Loading';
import { toast } from 'react-toastify';

function Finalize() {
  const { transactionID, isLoading } = useStore();
  const onClick = async () => { 
    try {
        if (window.VestaDataCollector) {
          window.VestaDataCollector.finalize()
            .then(() => ( toast.success(`Transaction finalize! ${transactionID}`, {
              position: toast.POSITION.TOP_RIGHT,
            })))
            .catch((error) => (
              toast.error(`Failed to fetch access token:${error}`, {
                position: toast.POSITION.TOP_RIGHT,
              })
            ))
        }                              
    } catch (error) {
        toast.error(`Failed to fetch access token:${error}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        // Handle error appropriately
    }
   };  
    useEffect(() => {
        // Function to dynamically load the VestaJS script
        const loadVestaScript = () => {
          const script = document.createElement('script');
          script.src = 'https://platform.vesta.io/js/static/dcExtension.js';
          // script.onload = () => initializeVesta(); // Initialize Vesta after the script loads
          document.body.appendChild(script);
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
        over='Finalize VESTA collector'
        title='5. Finalize'
        description='Finalize VESTA collector'
     />
  )
}

export default Finalize