import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export class UpdateUser {
    @IsString()
    @ApiProperty({ type: String })
    uuid: string;

    @IsString()
    @ApiProperty({ type: String })
    firstName: string;

    @IsString()
    @ApiProperty({ type: String })
    lastName: string;

    @IsString()
    @ApiProperty({ type: String })
    emailAdress: string;

    @IsString()
    @ApiProperty({ type: String })
    gitlabInfo: string;
}

export class CreateUser{
    @IsString()
    @ApiProperty({ type: String })
    uuid: string;

    @IsString()
    @ApiProperty({ type: String })
    firstName: string;

    @IsString()
    @ApiProperty({ type: String })
    emailAdress: string;
}