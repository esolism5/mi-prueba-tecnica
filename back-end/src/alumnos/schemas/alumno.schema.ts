import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Alumno extends Document {
  @Prop()
  nombre: string;

  @Prop()
  fechaNacimiento: Date;

  @Prop()
  nombrePadre: string;

  @Prop()
  nombreMadre: string;

  @Prop()
  grado: string;

  @Prop()
  seccion: string;

  @Prop()
  fechaIngreso: Date;
}

export const AlumnoSchema = SchemaFactory.createForClass(Alumno);
