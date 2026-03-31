import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  findAll() { return this.coursesService.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.coursesService.findOne(id); }

  @Get(':id/videos')
  @UseGuards(JwtAuthGuard)
  getVideos(@Param('id') id: string, @Req() req) {
    return this.coursesService.getVideos(id, req.user.id);
  }
}
