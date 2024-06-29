import { Post } from "../../entity/domain/post/post"
import type { PostRepository } from "../../entity/domain/post/repository"
import type { PostResponse } from "../../infrastructure/response/post"
import type { PostInputPort } from "./input"
import type { PostOutputPort } from "./output"

export class PostInteractor implements PostInputPort {
  constructor(
    private readonly repository: PostRepository,
    private readonly outputPort: PostOutputPort
  ) {}

  // async update(post: Post): Promise<PostResponse> {
  //   await this.repository.update(post)
  //   return this.outputPort.update(post)
  // }
  async update(id: string, title: string, content: string, status: string): Promise<PostResponse> {
    let updated: Post = await this.repository.findById(id)
    // このpostを更新する
    //updated = current.update(id,title, content, status)
    //Postインスタンスに対してupdateメソッドを呼び出す(??)
    updated = updated.update({
      title: title,
      content: content,
      status: status
    })
    // 更新されたpostでデータベースの情報を更新する
    await this.repository.update(updated)
    return this.outputPort.update(updated)
  }

  async findById(id: string): Promise<PostResponse> {
    const post = await this.repository.findById(id)
    return this.outputPort.findById(post)
  }

  async create(title: string, content: string, status: string): Promise<PostResponse> {
    const post = Post.generate({ title: title, content: content, status: status })
    await this.repository.create(post)
    return this.outputPort.create(post)
  }
}
