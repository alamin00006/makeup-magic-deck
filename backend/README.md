# Nigar Fashion World — Backend API

NestJS + PostgreSQL + Prisma backend.

## Setup

```bash
cd backend
npm install
cp .env.example .env   # Edit with your PostgreSQL credentials
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | No | Register user |
| POST | /api/auth/login | No | Login (JWT) |
| GET | /api/courses | No | List courses |
| GET | /api/courses/:id | No | Course detail |
| GET | /api/courses/:id/videos | Yes | Gated videos |
| POST | /api/payments | Yes | Create payment |
| GET | /api/payments/status/:id | Yes | Payment status |
| GET | /api/payments/my | Yes | My purchases |
| GET | /api/users/me | Yes | Profile |
| PATCH | /api/users/me | Yes | Update profile |

## Demo: `demo@nigar.com` / `123456`
