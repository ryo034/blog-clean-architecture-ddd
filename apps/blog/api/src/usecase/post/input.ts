import type { PostResponse } from "../../infrastructure/response/post"

export interface PostInputPort {
  findById(id: string): Promise<PostResponse>
}
