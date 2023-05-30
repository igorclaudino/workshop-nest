import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/db/prisma.service';
import { CreateLikeParam } from '../services/teviweet.service';

export interface CreateTeviweetParam {
  textBody: string;
  user: string;
  reteviweetId?: string;
  commentTeviweetId?: string;
}

@Injectable()
export class TeviweetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create({
    textBody,
    user,
    commentTeviweetId,
    reteviweetId,
  }: CreateTeviweetParam) {
    const teviweetCreated = await this.prismaService.teviweet.create({
      data: {
        textBody,
        user,
        commentTeviweetId,
        reteviweetId,
      },
    });
    return teviweetCreated;
  }

  async createLike({ teviweetId, user }: CreateLikeParam) {
    const likeCreated = await this.prismaService.teviweetLike.create({
      data: {
        user,
        teviweetId,
      },
    });

    return likeCreated;
  }

  async getById(id: string) {
    return await this.prismaService.teviweet.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
        likes: true,
        reteviweets: true,
      },
    });
  }

  async getAll() {
    return await this.prismaService.teviweet.findMany({
      include: {
        comments: true,
        likes: true,
        reteviweets: true,
      },
    });
  }
}
