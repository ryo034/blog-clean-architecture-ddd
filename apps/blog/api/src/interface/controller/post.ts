import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "../../usecase/post/input"
import { Post } from "../../entity/domain/post/post"
import type { CreatePostResponse } from "../../infrastructure/framework/fastify"
import type { UpdatePostResponse } from "../../infrastructure/framework/fastify"

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

  async update(id: string, title: string, content: string, status: string): Promise<UpdatePostResponse> {
    // id確認
    // if (post.getId() === "hoge") {  // インスタンスのidを参照
    //   //return this.useCase.create(post.getTitle(), post.getContent(), post.getStatus()); // 新規作成
    // }
    //return this.useCase.update(post); // 内容更新
    const res = await this.useCase.update(id, title, content, status)
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

  