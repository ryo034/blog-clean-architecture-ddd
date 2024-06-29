import type { Post } from "../../entity/domain/post/post"
import type { PostResponse } from "../../infrastructure/response/post"

export interface PostOutputPort {
  findById(post: Post): PostResponse
  create(post: Post): PostResponse
  update(post: Post): PostResponse
}
