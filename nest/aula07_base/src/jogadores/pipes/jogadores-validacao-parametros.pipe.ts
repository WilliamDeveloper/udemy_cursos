import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';

export class JogadoresValidacaoParametrosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`value ${value} metadata ${metadata.type}`);
   if(!value){
     throw new BadRequestException(`o valor do parametro ${metadata.data} nao pode ser vazio`)
   }
    return value;
  }

}