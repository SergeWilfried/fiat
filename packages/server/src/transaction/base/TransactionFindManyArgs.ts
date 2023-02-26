/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TransactionWhereInput } from "./TransactionWhereInput";
import { Type } from "class-transformer";
import { TransactionOrderByInput } from "./TransactionOrderByInput";

@ArgsType()
class TransactionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TransactionWhereInput,
  })
  @Field(() => TransactionWhereInput, { nullable: true })
  @Type(() => TransactionWhereInput)
  where?: TransactionWhereInput;

  @ApiProperty({
    required: false,
    type: [TransactionOrderByInput],
  })
  @Field(() => [TransactionOrderByInput], { nullable: true })
  @Type(() => TransactionOrderByInput)
  orderBy?: Array<TransactionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TransactionFindManyArgs as TransactionFindManyArgs };
