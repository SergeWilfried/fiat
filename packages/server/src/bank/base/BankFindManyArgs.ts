/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { BankWhereInput } from './BankWhereInput';
import { Type } from 'class-transformer';
import { BankOrderByInput } from './BankOrderByInput';

@ArgsType()
class BankFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BankWhereInput,
  })
  @Field(() => BankWhereInput, { nullable: true })
  @Type(() => BankWhereInput)
  where?: BankWhereInput;

  @ApiProperty({
    required: false,
    type: [BankOrderByInput],
  })
  @Field(() => [BankOrderByInput], { nullable: true })
  @Type(() => BankOrderByInput)
  orderBy?: Array<BankOrderByInput>;

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

export { BankFindManyArgs as BankFindManyArgs };
