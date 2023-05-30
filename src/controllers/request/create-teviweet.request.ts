import { ApiProperty } from '@nestjs/swagger';

export class CreateTeviweetRequest {
  @ApiProperty()
  textMessage: string;
  @ApiProperty()
  user: string;
}
