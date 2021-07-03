// import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
//
// @Catch()
// export class AllExceptionFilter implements ExceptionFilter {
//
//   private readonly logger = new Logger(AllExceptionFilter.name)
//
//   catch(exception: unknown, host: ArgumentsHost): any {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse();
//     const request = ctx.getRequest();
//
//     const status = exception instanceof HttpException ?
//       exception.getStatus():
//       HttpStatus.INTERNAL_SERVER_ERROR;
//
//     const message = exception instanceof HttpException ?
//       exception.getResponse() :
//       '';
//
//     this.logger.error(`http status ${status} error message ${JSON.stringify(message)}`)
//
//     response.status(status).json({
//       timestamp: new Date().toISOString(),
//       path: request.url,
//       error: message
//     })
//
//   }
//
// }
const a = 2
