import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(
    private readonly categoriaService: CategoriasService
  ) {

  }


  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body() criarCategoriaDto: CriarCategoriaDto
  ): Promise<Categoria> {
    return await this.categoriaService.criarCategoria(criarCategoriaDto);
  }

  @Get()
  async consultarCategorias(): Promise<Categoria[]>{
    return await this.categoriaService.consultarTodasCategorias();
  }

  @Get('/:categoria')
  async consultarCategoriaById(
    @Param('categoria') categoria : string
  ): Promise<Categoria>{
    return await this.categoriaService.consultarCategoriaById(categoria);
  }

  @Put("/:categoria")
  async atualizarCategoriaDto(
    @Body() atualizarCategoriaDto : AtualizarCategoriaDto,
    @Param('categoria') categoria: string
  ) : Promise<void>{
      this.categoriaService.atualizarCategoria(categoria, atualizarCategoriaDto)
  }

  @Post('/:categoria/jogador/:idJogador')
  async atribuirCategoriaJogador(
    @Param() params: string[]
  ):Promise<void>{
    console.log(`params ${params}`)
  }



}
