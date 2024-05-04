import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

const AuthLayout = () =>  {
const isAuthenticate =true;

return (
  
  <>
  
  {isAuthenticate ?(
      <Navigate to="/" />
  ):
  (
      <>
      <section className='flex flex-1 justify-center items-center flex-col py-10 bg-p-1'>
          <Outlet />

          
      </section>

        <img 
        src='/asset/Images/learn-login.jpg'
        alt='logo'
        className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat border-l-2 border-black'

        />
      </>
  )
  }
  </>
 

)
}

export default AuthLayout

