import AccessTokenFetcher from '@/components/AccessTokenFetcher'
import AddCart from '@/components/AddCart'
import Evaluate from '@/components/Evaluate'
import Finalize from '@/components/Finalize'
import Header from '@/components/Header'
import Initiate from '@/components/Initiate'
import Items from '@/components/Items'
import PageChange from '@/components/PageChange'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 ">
      <Header />            
      <div className="my-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <AccessTokenFetcher />
        <Initiate />
        <AddCart />
        <PageChange />
        <Finalize />
        <Evaluate />
        <Items
          url='https://platform.vesta.io/vesta-platform/direct-api/'
          title='VESTA Docs'
          description='Find in-depth information about Vesta features and API.'
         />                
      </div>
    </main>
  )
}
