import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export enum GenderEnum {
  'Male' = 'male',
  'Female' = 'female',
  'Other' = 'other',
}

export enum StatusEnum {
  'Disabled' = 'disabled',
  'Banned' = 'banned',
  'Verification' = 'verification',
  'Active' = 'active',
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  readonly first_name: string;

  @IsString()
  @IsOptional()
  @MaxLength(64)
  readonly last_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  readonly phone_number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly password: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  readonly profilePicture: string;

  @IsOptional()
  @IsString()
  @MaxLength(1024)
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly birth_date: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly country_code: string;

  @IsString()
  @IsEnum(GenderEnum)
  @IsOptional()
  readonly gender: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(StatusEnum)
  readonly status: string = 'verification';

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly company_name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly company_location_city: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly company_location_district: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly company_location_address: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly company_location_lat: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly company_location_lng: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  readonly remember_token: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly lastLogin_at: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly lastLogin_ip: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly lastLogin_userAgent: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly last_seen: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly lastActivity_at: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly email_verified_at: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly admin_verified_at: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly password_reset_code: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly created_at: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly updated_at: string;

  @IsOptional()
  @IsString()
  @IsDate()
  readonly deleted_at: string;
}
