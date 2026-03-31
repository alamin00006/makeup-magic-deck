import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany({
      where: { isActive: true },
      include: { _count: { select: { videos: true } } },
    });
  }

  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
      include: { _count: { select: { videos: true } } },
    });
  }

  async getVideos(courseId: string, userId?: string) {
    const videos = await this.prisma.video.findMany({
      where: { courseId },
      orderBy: { sortOrder: 'asc' },
    });
    let hasPurchased = false;
    if (userId) {
      const purchase = await this.prisma.purchase.findUnique({
        where: { userId_courseId: { userId, courseId } },
      });
      hasPurchased = purchase?.status === 'SUCCESS';
    }
    return videos.map((v) => ({
      ...v,
      youtubeId: v.isFree || hasPurchased ? v.youtubeId : null,
      locked: !v.isFree && !hasPurchased,
    }));
  }
}
