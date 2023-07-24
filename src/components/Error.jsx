import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err=useRouteError();
  return (
    <>
      <h1>Something went wrong!!</h1>
      <p>{err.message}</p>
      </>
      )
      };
      export default Error;