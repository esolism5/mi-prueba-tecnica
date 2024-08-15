import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alumno, AlumnoSchema } from './schemas/alumno.schema';

import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Alumno.name, schema: AlumnoSchema }])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
