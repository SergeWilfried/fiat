/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { StringNullableFilter } from '../../util/StringNullableFilter';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsEnum } from 'class-validator';
import { CustomerListRelationFilter } from '../../customer/base/CustomerListRelationFilter';
import { StringFilter } from '../../util/StringFilter';
import { JsonFilter } from '../../util/JsonFilter';
import { BooleanFilter } from '../../util/BooleanFilter';
import { EnumUserStatus } from './EnumUserStatus';
import { TransactionListRelationFilter } from '../../transaction/base/TransactionListRelationFilter';

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  businessName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerListRelationFilter)
  @IsOptional()
  @Field(() => CustomerListRelationFilter, {
    nullable: true,
  })
  customer?: CustomerListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

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
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  messages?: JsonFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  privacyPolicy?: BooleanFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserStatus,
  })
  @IsEnum(EnumUserStatus)
  @IsOptional()
  @Field(() => EnumUserStatus, {
    nullable: true,
  })
  status?: 'Approved' | 'Pending' | 'Rejected';

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  termsAndConditions?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionListRelationFilter)
  @IsOptional()
  @Field(() => TransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: TransactionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
