import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()

export class User extends Document {
        @Prop()
        username: string

        @Prop()
        password: string
}


export const userSchema = SchemaFactory.createForClass(User)