import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePaymentDto } from './payments.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreatePaymentDto, @Req() req) {
    return this.paymentsService.createPayment(req.user.id, dto.courseId, dto.phone, dto.trxId);
  }

  @Get('status/:id')
  @UseGuards(JwtAuthGuard)
  getStatus(@Param('id') id: string) { return this.paymentsService.getStatus(id); }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  myPurchases(@Req() req) { return this.paymentsService.getUserPurchases(req.user.id); }
}
