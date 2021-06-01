import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { RequestWithUser } from './common/interfaces/request-with-user.interface';
import { GetCompleteUserProfileOutput } from './profile/dtos/get-complete-user-profile.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getPublicProfile(
    @Param() { id }: { id: string },
  ): Promise<GetCompleteUserProfileOutput> {
    return this.appService.getPublicProfile(id);
  }
}
