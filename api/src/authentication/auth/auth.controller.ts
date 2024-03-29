import { Public } from './../../shared/decorators/public.decorator';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Public()
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}
}
