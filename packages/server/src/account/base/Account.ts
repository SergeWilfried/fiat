/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumAccountAccountType } from "./EnumAccountAccountType";
import { Type } from "class-transformer";
import { EnumAccountCurrency } from "./EnumAccountCurrency";
import { Customer } from "../../customer/base/Customer";
import { EnumAccountStatus } from "./EnumAccountStatus";

@ObjectType()
class Account {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountNumber!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAccountAccountType,
  })
  @IsEnum(EnumAccountAccountType)
  @IsOptional()
  @Field(() => EnumAccountAccountType, {
    nullable: true,
  })
  accountType?: "MobileMoney" | "Iban" | "Wallet" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  availableBalance!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumAccountCurrency,
  })
  @IsEnum(EnumAccountCurrency)
  @IsOptional()
  @Field(() => EnumAccountCurrency, {
    nullable: true,
  })
  currency?: "Xof" | "Eur" | "Usd" | "Celo" | null;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customers?: Customer;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAccountStatus,
  })
  @IsEnum(EnumAccountStatus)
  @IsOptional()
  @Field(() => EnumAccountStatus, {
    nullable: true,
  })
  status?: "Approved" | "Pending" | "Blocked" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Account as Account };
