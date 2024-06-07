import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "../../usecase/post/input"

export class PostController {
  constructor(private readonly useCase: PostInputPort) {}

  findById(id: string): Promise<PostResponse> {
    return this.useCase.findById(id)
  }

  create(title: string, content: string, status: string): Promise<PostResponse> {
    // validation
    if (status === "hoge") {
      throw new Error("status is invalid")
    }
    return this.useCase.create(title, content, status)
  }
}
