
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alumno } from './schemas/alumno.schema';

@Injectable()
export class AlumnosService {
  constructor(@InjectModel(Alumno.name) private readonly alumnoModel: Model<Alumno>) {}

  async create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno> {
    const newAlumno = new this.alumnoModel(createAlumnoDto);
    return newAlumno.save();
  }

   async consultarPorGrado(grado: string): Promise<Alumno[]> {
    return this.alumnoModel.find({ grado }).exec();
  }
}
