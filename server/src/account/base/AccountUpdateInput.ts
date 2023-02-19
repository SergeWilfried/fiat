/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { EnumAccountAccountType } from "./EnumAccountAccountType";
import { EnumAccountCurrency } from "./EnumAccountCurrency";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumAccountStatus } from "./EnumAccountStatus";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class AccountUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountNumber?: string | null;

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
  availableBalance?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentWhereUniqueInput)
  @IsOptional()
  @Field(() => DocumentWhereUniqueInput, {
    nullable: true,
  })
  document?: DocumentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

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
    required: false,
    type: () => TransactionUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutAccountsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { AccountUpdateInput };
