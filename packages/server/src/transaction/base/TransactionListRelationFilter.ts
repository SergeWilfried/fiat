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
import { TransactionWhereInput } from "./TransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereInput)
  @IsOptional()
  @Field(() => TransactionWhereInput, {
    nullable: true,
  })
  every?: TransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => TransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereInput)
  @IsOptional()
  @Field(() => TransactionWhereInput, {
    nullable: true,
  })
  some?: TransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => TransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereInput)
  @IsOptional()
  @Field(() => TransactionWhereInput, {
    nullable: true,
  })
  none?: TransactionWhereInput;
}
export { TransactionListRelationFilter as TransactionListRelationFilter };
