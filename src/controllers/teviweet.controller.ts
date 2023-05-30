import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { TeviweetService } from '../services/teviweet.service';
import { CreateTeviweetRequest } from './request/create-teviweet.request';
import { CaractersMaxError } from '../services/errors/caracters-max.error';
import { CreateLikeRequest } from './request/create-like.request';

@Controller({
  path: 'teviweet',
})
export class TeviweetController {
  constructor(public teviweetService: TeviweetService) {}
  @Post()
  async createTeviweet(
    @Body() { textMessage: textBody, user }: CreateTeviweetRequest,
  ) {
    try {
      return await this.teviweetService.create({
        textBody,
        user,
      });
    } catch (err) {
      if (err instanceof CaractersMaxError)
        throw new BadRequestException(err.message);
    }
  }

  @Post(':id/comments')
  async createComment(
    @Param('id') id: string,
    @Body() { textMessage: textBody, user }: CreateTeviweetRequest,
  ) {
    try {
      return await this.teviweetService.create({
        textBody,
        user,
        commentTeviweetId: id,
      });
    } catch (err) {
      if (err instanceof CaractersMaxError)
        throw new BadRequestException(err.message);
    }
  }

  @Post(':id/likes')
  async createLike(
    @Param('id') id: string,
    @Body() { user }: CreateLikeRequest,
  ) {
    try {
      return await this.teviweetService.createLike({
        teviweetId: id,
        user,
      });
    } catch (err) {
      if (err instanceof CaractersMaxError)
        throw new BadRequestException(err.message);
    }
  }

  @Post(':id/reteviweet')
  async reteviweet(
    @Param('id') id: string,
    @Body() { user, textMessage: textBody }: CreateTeviweetRequest,
  ) {
    try {
      return await this.teviweetService.create({
        user,
        textBody,

        reteviweetId: id,
      });
    } catch (err) {
      if (err instanceof CaractersMaxError)
        throw new BadRequestException(err.message);
    }
  }

  @Get(':id')
  async getTeviweet(@Param('id') id: string) {
    try {
      return await this.teviweetService.getById(id);
    } catch (err) {
      if (err instanceof CaractersMaxError)
        throw new BadRequestException(err.message);
    }
  }

  @Get()
  async getAll() {
    try {
      return await this.teviweetService.getAll();
    } catch (err) {
      if (err instanceof CaractersMaxError)
        throw new BadRequestException(err.message);
    }
  }
}
