import type { PostResponse } from "../../infrastructure/response/post"

export interface PostInputPort {
  findById(id: string): Promise<PostResponse>
  create(title: string, content: string, status: string): Promise<PostResponse>
}
