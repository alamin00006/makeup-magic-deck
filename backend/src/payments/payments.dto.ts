import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty() courseId: string;
  @IsNotEmpty() phone: string;
  @IsOptional() trxId?: string;
}
