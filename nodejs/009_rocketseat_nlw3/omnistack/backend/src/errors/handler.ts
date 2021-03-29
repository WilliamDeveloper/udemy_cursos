import {ErrorRequestHandler} from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string] : string[];
}

const errorHandler : ErrorRequestHandler = (error, req, res, next) => {

  if(error instanceof ValidationError){
    let objErros : ValidationErrors = {};

    error.inner.forEach(erro =>{
      objErros[erro.path]=erro.errors 
    });

    return res.status(400).json({
      message : 'validation fails', objErros
    });

  }

  console.error(error);

  return res.status(500).json({
    message: "Internal server error"
  });
};

export default errorHandler;