import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnosModule } from './alumnos/alumnos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'), // Asegúrate de que la URL es correcta
    AlumnosModule,
  ],
})
export class AppModule {}
