import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async createPayment(userId: string, courseId: string, phone: string, trxId?: string) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course) throw new BadRequestException('Course not found');
    const existing = await this.prisma.purchase.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
    if (existing?.status === 'SUCCESS') throw new BadRequestException('Course already purchased');

    const purchase = await this.prisma.purchase.upsert({
      where: { userId_courseId: { userId, courseId } },
      update: { phone, trxId, status: 'PROCESSING' },
      create: { userId, courseId, amount: course.price, phone, trxId, status: 'PROCESSING' },
    });

    // Simulate SurjoPay — replace with real gateway integration
    setTimeout(async () => {
      await this.prisma.purchase.update({ where: { id: purchase.id }, data: { status: 'SUCCESS' } });
    }, 2000);

    return { purchaseId: purchase.id, status: 'PROCESSING', message: 'Payment is being processed' };
  }

  async getStatus(purchaseId: string) {
    const purchase = await this.prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: { course: true },
    });
    if (!purchase) throw new BadRequestException('Purchase not found');
    return { status: purchase.status, course: purchase.course };
  }

  async getUserPurchases(userId: string) {
    return this.prisma.purchase.findMany({
      where: { userId, status: 'SUCCESS' },
      include: { course: true },
    });
  }
}
