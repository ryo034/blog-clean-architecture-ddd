import type { Post } from "../../entity/domain/post/post"

interface PostDBModel {
  id: string
  title: string
  content: string
  status: string
}

export class PostDriver {
  async findById(id: string): Promise<PostDBModel> {
    // データベースから指定のpostIDを取得
    throw new Error(`PostDriver findById not implemented for ${id}`)
  }

  //create (title:string,content:string):Promise<PostDBModel> {
  async create(post: Post): Promise<void> {
    //データベースになんか作る
    throw new Error(`PostDriver create not implemented`)
  }
}
