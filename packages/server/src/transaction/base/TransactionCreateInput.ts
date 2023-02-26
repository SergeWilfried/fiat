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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import {
  ValidateNested,
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumTransactionStatus } from "./EnumTransactionStatus";
import { EnumTransactionTransactionType } from "./EnumTransactionTransactionType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class TransactionCreateInput {
  @ApiProperty({
    required: true,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @Field(() => AccountWhereUniqueInput)
  account!: AccountWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currency!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fee?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  metadata?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionStatus,
  })
  @IsEnum(EnumTransactionStatus)
  @IsOptional()
  @Field(() => EnumTransactionStatus, {
    nullable: true,
  })
  status?: "Successful" | "Pending" | "Failed" | null;

  @ApiProperty({
    required: true,
    enum: EnumTransactionTransactionType,
  })
  @IsEnum(EnumTransactionTransactionType)
  @Field(() => EnumTransactionTransactionType)
  transactionType!: "Credit" | "Debit";

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { TransactionCreateInput as TransactionCreateInput };
