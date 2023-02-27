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
import { EnumAccountAccountType } from "./EnumAccountAccountType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { EnumAccountCurrency } from "./EnumAccountCurrency";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumAccountStatus } from "./EnumAccountStatus";

@InputType()
class AccountWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumAccountAccountType,
  })
  @IsEnum(EnumAccountAccountType)
  @IsOptional()
  @Field(() => EnumAccountAccountType, {
    nullable: true,
  })
  accountType?: "MobileMoney" | "Iban" | "Wallet";

  @ApiProperty({
    required: false,
    enum: EnumAccountCurrency,
  })
  @IsEnum(EnumAccountCurrency)
  @IsOptional()
  @Field(() => EnumAccountCurrency, {
    nullable: true,
  })
  currency?: "Xof" | "Eur" | "Usd" | "Celo";

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customers?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumAccountStatus,
  })
  @IsEnum(EnumAccountStatus)
  @IsOptional()
  @Field(() => EnumAccountStatus, {
    nullable: true,
  })
  status?: "Approved" | "Pending" | "Blocked";
}

export { AccountWhereInput as AccountWhereInput };
