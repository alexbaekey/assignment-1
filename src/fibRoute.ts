// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import {Request, Response} from 'express'; 
/* above line needed according to https://stackoverflow.com/questions/58567145/types-for-req-and-res-in-express/58567246#58567246 but worked without it */

export default (req:Request, res:Response) => {
  const num:string = req.params.num
  const fibN:number = fibonacci(parseInt(num));
  /* parseInt takes a string arguement */

  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
