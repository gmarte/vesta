'use client'
import { useEffect } from 'react';
import Items from './Items'
import Loading from './Loading';
import { useStore } from '@/store/store';
import { toast } from 'react-toastify';

function PageChange() {
  const { transactionID, isLoading } = useStore();
  const onClick = async () => { 
    try {
        if (window.VestaDataCollector) {
          window.VestaDataCollector.resume(transactionID)
            .then((transid) => ( toast.success(`Page changed! ${transid}`, {
              position: toast.POSITION.TOP_RIGHT,
            })))
            .catch(() => (
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
        over='page change'         
        title='4. Page Change'
        description='Funcionality page change'
     />
  )
}

export default PageChange