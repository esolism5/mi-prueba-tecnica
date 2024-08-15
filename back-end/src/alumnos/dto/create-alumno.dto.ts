import { IsString, IsDateString } from 'class-validator';

export class CreateAlumnoDto {
  @IsString()
  readonly nombre?: string;

  @IsDateString()
  readonly fechaNacimiento?: string;

  @IsString()
  readonly nombrePadre?: string;

  @IsString()
  readonly nombreMadre?: string;

  @IsString()
  readonly grado?: string;

  @IsString()
  readonly seccion?: string;

  @IsDateString()
  readonly fechaIngreso?: string;
}
