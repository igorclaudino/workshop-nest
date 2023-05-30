import { Module } from '@nestjs/common';
import { TeviweetController } from './controllers/teviweet.controller';
import { TeviweetRepository } from './repositories/teviweet.repository';
import { TeviweetService } from './services/teviweet.service';
import { PrismaService } from './config/db/prisma.service';

@Module({
  imports: [],
  controllers: [TeviweetController],
  providers: [TeviweetService, TeviweetRepository, PrismaService],
})
export class AppModule {}
