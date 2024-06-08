import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "../../usecase/post/input"
import type { CreatePostResponse } from "../../infrastructure/framework/fastify"

export class PostController {
  constructor(private readonly useCase: PostInputPort) {}

  async findById(id: string): Promise<PostResponse> {
    return await this.useCase.findById(id)
  }

  async create(title: string, content: string, status: string): Promise<CreatePostResponse> {
    // validation
    if (status === "hoge") {
      throw new Error("status is invalid")
    }
    const res = await this.useCase.create(title, content, status)
    // DTO to API response
    return {
      post: {
        id: res.id,
        title: res.title,
        content: res.content,
      }
    }
  }
}
