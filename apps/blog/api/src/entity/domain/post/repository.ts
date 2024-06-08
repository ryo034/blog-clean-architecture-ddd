import type { Post } from "./post"

export interface PostRepository {
  findById(id: string): Promise<Post>
  create(post: Post): Promise<void>
  update(post: Post): Promise<void>
}
