import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { Alumno } from './schemas/alumno.schema';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post('crear-alumno')
  create(@Body() createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    return this.alumnosService.create(createAlumnoDto);
  }

  @Get('consultar-alumno/:grado')
  consultarPorGrado(@Param('grado') grado: string): Promise<Alumno[]> {
    return this.alumnosService.consultarPorGrado(grado);
  }
  
}
