import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  description?: string;
}
