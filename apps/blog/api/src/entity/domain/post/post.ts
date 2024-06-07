interface Props {
  id: string
  title: string
  content: string
  status: string
}

export class Post {
  private id: string
  private title: string
  private content: string
  private status: string

  private constructor(props: Props) {
    this.id = props.id
    this.title = props.title
    this.content = props.content
    this.status = props.status
  }

  static create(v: Props): Post {
    return new Post(v)
  }

  static generate(v: Omit<Props, "id">): Post {
    return new Post({
      // ここでidを作る
      id: "qfdfqfjnasiufdlausbfdajs",
      title: v.title,
      content: v.content,
      status: v.status
    })
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

  getStatus(): string {
    return this.status
  }
}
