import Logger from '../../../../pkg/logger'
import postSchema from '../../../../database/mongo/schemas/post.schema'
import { RequestParams } from '../../../../helpers/requestParams'
import { RequestBody } from '../../entity/interface'

class Repository {
    constructor(private logger: Logger, private post: typeof postSchema) {}

    public async Fetch(request: RequestParams) {
        const data = await this.post
            .find()
            .limit(request.limit)
            .skip(request.offset)
        const count = await this.post.count()
        return {
            data,
            count,
        }
    }

    public async Store(body: RequestBody) {
        const newPost = new this.post({
            title: body.title,
            description: body.description,
        })
        return newPost.save()
    }
}

export default Repository
