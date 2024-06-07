import { Post } from "../../entity/domain/post/post"
import type { PostRepository } from "../../entity/domain/post/repository"
import type { PostDriver } from "../../infrastructure/driver/post"

export class PostGateway implements PostRepository {
  constructor(private readonly postDriver: PostDriver) {}

  async findById(id: string): Promise<Post> {
    const res = await this.postDriver.findById(id)
    return Post.create({ id: res.id, title: res.title, content: res.content, status: res.status })
  }

  async create(post: Post): Promise<void> {
    return this.postDriver.create(post) //NULL
  }
}
