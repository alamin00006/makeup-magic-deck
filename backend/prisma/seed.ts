import { PrismaClient, CourseType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('123456', 10);
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@nigar.com' },
    update: {},
    create: {
      name: 'Fatima Akter',
      email: 'demo@nigar.com',
      phone: '+880 1712-345678',
      password: hashedPassword,
    },
  });

  const recordedCourse = await prisma.course.upsert({
    where: { id: 'recorded-course-id' },
    update: {},
    create: {
      id: 'recorded-course-id',
      type: CourseType.RECORDED,
      name: 'রেকর্ডেড ভিডিও কোর্স',
      nameEn: 'Recorded Video Course',
      description: 'প্রফেশনাল মেকআপ শিখুন ঘরে বসে',
      price: 2999,
      priceDisplay: '৳২,৯৯৯',
    },
  });

  await prisma.course.upsert({
    where: { id: 'physical-course-id' },
    update: {},
    create: {
      id: 'physical-course-id',
      type: CourseType.PHYSICAL,
      name: 'ফিজিক্যাল কোর্স',
      nameEn: 'Physical Course',
      description: 'হাতে-কলমে শিখুন সরাসরি ক্লাসে',
      price: 7999,
      priceDisplay: '৳৭,৯৯৯',
    },
  });

  const videos = [
    { module: 'Module 1: বেসিক মেকআপ', title: 'স্কিন প্রিপারেশন ও বেস মেকআপ', titleEn: 'Skin Preparation & Base', youtubeId: 'dQw4w9WgXcQ', duration: '১৮:৩০', sortOrder: 1, isFree: true },
    { module: 'Module 1: বেসিক মেকআপ', title: 'ফাউন্ডেশন অ্যাপ্লিকেশন টেকনিক', titleEn: 'Foundation Application', youtubeId: 'dQw4w9WgXcQ', duration: '২২:১৫', sortOrder: 2, isFree: false },
    { module: 'Module 1: বেসিক মেকআপ', title: 'কনসিলার ও সেটিং পাউডার', titleEn: 'Concealer & Setting Powder', youtubeId: 'dQw4w9WgXcQ', duration: '১৫:৪৫', sortOrder: 3, isFree: false },
    { module: 'Module 2: আই মেকআপ', title: 'আইশ্যাডো ব্লেন্ডিং বেসিক', titleEn: 'Eyeshadow Blending Basics', youtubeId: 'dQw4w9WgXcQ', duration: '২০:০০', sortOrder: 4, isFree: false },
    { module: 'Module 2: আই মেকআপ', title: 'আইলাইনার ও মাসকারা টিপস', titleEn: 'Eyeliner & Mascara Tips', youtubeId: 'dQw4w9WgXcQ', duration: '১৬:৩০', sortOrder: 5, isFree: false },
    { module: 'Module 2: আই মেকআপ', title: 'আইব্রো শেপিং ও ফিলিং', titleEn: 'Eyebrow Shaping & Filling', youtubeId: 'dQw4w9WgXcQ', duration: '১৪:২০', sortOrder: 6, isFree: false },
    { module: 'Module 3: লিপ ও কন্টুর', title: 'লিপ লাইনার ও লিপস্টিক', titleEn: 'Lip Liner & Lipstick', youtubeId: 'dQw4w9WgXcQ', duration: '১২:৪৫', sortOrder: 7, isFree: false },
    { module: 'Module 3: লিপ ও কন্টুর', title: 'কন্টুর ও হাইলাইট টেকনিক', titleEn: 'Contour & Highlight', youtubeId: 'dQw4w9WgXcQ', duration: '২৫:০০', sortOrder: 8, isFree: false },
    { module: 'Module 3: লিপ ও কন্টুর', title: 'ব্লাশ অ্যাপ্লিকেশন', titleEn: 'Blush Application', youtubeId: 'dQw4w9WgXcQ', duration: '১০:৩০', sortOrder: 9, isFree: false },
    { module: 'Module 4: ব্রাইডাল মেকআপ', title: 'ব্রাইডাল বেস ও ফাউন্ডেশন', titleEn: 'Bridal Base & Foundation', youtubeId: 'dQw4w9WgXcQ', duration: '৩০:০০', sortOrder: 10, isFree: false },
    { module: 'Module 4: ব্রাইডাল মেকআপ', title: 'ব্রাইডাল আই মেকআপ', titleEn: 'Bridal Eye Makeup', youtubeId: 'dQw4w9WgXcQ', duration: '২৮:১৫', sortOrder: 11, isFree: false },
    { module: 'Module 4: ব্রাইডাল মেকআপ', title: 'ফাইনাল লুক ও সেটিং স্প্রে', titleEn: 'Final Look & Setting Spray', youtubeId: 'dQw4w9WgXcQ', duration: '২০:৪৫', sortOrder: 12, isFree: false },
  ];

  for (const v of videos) {
    await prisma.video.create({ data: { ...v, courseId: recordedCourse.id } });
  }

  await prisma.purchase.upsert({
    where: { userId_courseId: { userId: demoUser.id, courseId: recordedCourse.id } },
    update: {},
    create: { userId: demoUser.id, courseId: recordedCourse.id, amount: 2999, status: 'SUCCESS' },
  });

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
