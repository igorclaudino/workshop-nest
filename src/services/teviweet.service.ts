import { Injectable } from '@nestjs/common';
import { TeviweetRepository } from '../repositories/teviweet.repository';
import { CaractersMaxError } from './errors/caracters-max.error';

export interface CreateTeviweetParam {
  textBody: string;
  user: string;
  commentTeviweetId?: string;
  reteviweetId?: string;
}

export interface CreateLikeParam {
  user: string;
  teviweetId: string;
}

@Injectable()
export class TeviweetService {
  constructor(public repository: TeviweetRepository) {}

  async create(teviweet: CreateTeviweetParam) {
    if (teviweet.textBody.length > 280) throw new CaractersMaxError();
    const created = await this.repository.create(teviweet);
    return created;
  }

  async createLike(like: CreateLikeParam) {
    const likeCreated = await this.repository.createLike(like);
    return likeCreated;
  }

  async getById(id: string) {
    return await this.repository.getById(id);
  }

  getAll() {
    return this.repository.getAll();
  }
}
