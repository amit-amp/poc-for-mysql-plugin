/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumCustomerAnimal } from "./EnumCustomerAnimal";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumCustomerAnimal,
    isArray: true,
  })
  @IsEnum(EnumCustomerAnimal, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumCustomerAnimal], {
    nullable: true,
  })
  animal?: Array<"Dog" | "Cat" | "Bird">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;
}
export { CustomerUpdateInput };
