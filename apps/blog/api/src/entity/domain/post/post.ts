//Postクラスのコンストラクタに引き渡される引数の型
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

  //引き渡されたidプロパティ
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

  //id以外を更新する
  // update(v: Omit<Props, "id">): void {
  //   this.title = v.title;
  //   this.content = v.content;
  //   this.status = v.status;
  // }
  //新しいモデルを作り返すよう(イミュータブル)にする
  //updateは id以外のプロパティを新しいインスタンスで返す
  update(v: Omit<Props, "id">): Post {
    const updated = {
      id:this.id,
      title:v.title,
      content:v.content,
      status:v.status,
    }
    return new Post(updated)
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
