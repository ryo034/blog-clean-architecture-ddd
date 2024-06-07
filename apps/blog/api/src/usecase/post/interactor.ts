import type { PostRepository } from "../../entity/domain/post/repository"
import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "./input"
import type { PostOutputPort } from "./output"

export class PostInteractor implements PostInputPort {
  constructor(
    private readonly repository: PostRepository,
    private readonly outputPort: PostOutputPort
  ) {}
  async findById(id: string): Promise<PostResponse> {
    const post = await this.repository.findById(id)
    return this.outputPort.findById(post)
  }
}
