import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'Signed In' };
  }

  signup() {
    return { msg: 'Signed Up' };
  }
}
