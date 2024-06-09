import type { PostResponse } from "../../infrastructure/response/post"
import type { Post } from "../../entity/domain/post/post"

export interface PostInputPort {
  findById(id: string): Promise<PostResponse>
  create(title: string, content: string, status: string): Promise<PostResponse>
  update(id: string, title: string, content: string, status: string): Promise<PostResponse>
}
