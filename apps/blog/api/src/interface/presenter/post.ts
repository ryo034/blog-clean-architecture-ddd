import type { Post } from "../../entity/domain/post/post"
import type { PostResponse } from "../../infrastructure/response/post"
import type { PostOutputPort } from "../../usecase/post/output"

export class PostPresenter implements PostOutputPort {
  findById(post: Post): PostResponse {
    return {
      id: post.getId(),
      title: post.getTitle(),
      content: post.getContent()
    }
  }
}
