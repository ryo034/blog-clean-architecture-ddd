interface Props {
  id: string
  title: string
  content: string
}

export class Post {
  private id: string
  private title: string
  private content: string

  private constructor(props: Props) {
    this.id = props.id
    this.title = props.title
    this.content = props.content
  }

  static create(v: Props): Post {
    return new Post(v)
  }

  getId(): string {
    return this.id
  }

  getTitle(): string {
    return this.title
  }

  getContent(): string {
    return this.content
  }
}
