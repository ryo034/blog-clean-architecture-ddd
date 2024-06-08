import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "../../usecase/post/input"
import { Post } from "../../entity/domain/post/post"

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

  update(post: Post): Promise<PostResponse> {
    // id確認
    if (post.getId() === "hoge") {  // インスタンスのidを参照
      return this.useCase.create(post.getTitle(), post.getContent(), post.getStatus()); // 新規作成
    }
    return this.useCase.update(post); // 内容更新
  }
}

  