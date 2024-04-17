// filter designed to catch 'ValidationError' exceptions thrown by Mongoose
import { ArgumentsHost, RpcExceptionFilter, Catch } from '@nestjs/common';
import { Error } from 'mongoose';
import ValidationError = Error;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost): any {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      createBy: 'ValidationErrorFilter',
      errors: exception,
    });
  }
}

// ArgumentsHost - allows you to access request, response and other data related to the HTTP request
//  RpcExceptionFilter - for creating custom exception filters
