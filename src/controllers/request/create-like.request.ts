import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeRequest {
  @ApiProperty()
  user: string;
}
