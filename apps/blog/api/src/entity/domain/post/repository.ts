import type { Post } from "./post"

export interface PostRepository {
  findById(id: string): Promise<Post>
}
