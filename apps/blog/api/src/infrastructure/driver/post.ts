interface PostModel {
  id: string
  title: string
  content: string
}

export class PostDriver {
  findById(id: string): PostModel {
    throw new Error(`PostDriver findById not implemented for ${id}`)
  }
}
