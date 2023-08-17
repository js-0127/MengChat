import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../schemas/schema';


export const MONGO_MODEL = MongooseModule.forFeature([{
        name: 'USER_MODEL',
        schema: userSchema,
        collection: 'user'

}])

@Global()
@Module({
        imports: [
                MongooseModule.forRoot("mongodb://admin:123456@localhost:27017/chat?authSource=admin"),
                MONGO_MODEL
        ]
        ,
        exports: [MONGO_MODEL]
},


)
export class DbModule { }
