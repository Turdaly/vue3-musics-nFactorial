export interface Comment {
  id: number,
  username: string,
  albom_title: string
  content: string,
  datetime: string
}

export interface CommentArray {
  data: Array<Comment>
}