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
import { BankWhereInput } from "./BankWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BankListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BankWhereInput,
  })
  @ValidateNested()
  @Type(() => BankWhereInput)
  @IsOptional()
  @Field(() => BankWhereInput, {
    nullable: true,
  })
  every?: BankWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankWhereInput,
  })
  @ValidateNested()
  @Type(() => BankWhereInput)
  @IsOptional()
  @Field(() => BankWhereInput, {
    nullable: true,
  })
  some?: BankWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankWhereInput,
  })
  @ValidateNested()
  @Type(() => BankWhereInput)
  @IsOptional()
  @Field(() => BankWhereInput, {
    nullable: true,
  })
  none?: BankWhereInput;
}
export { BankListRelationFilter as BankListRelationFilter };
