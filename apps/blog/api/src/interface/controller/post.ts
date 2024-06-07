import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "../../usecase/post/input"

export class PostController {
  constructor(private readonly useCase: PostInputPort) {}

  findById(id: string): Promise<PostResponse> {
    return this.useCase.findById(id)
  }
}
