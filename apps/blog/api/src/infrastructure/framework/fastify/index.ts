import fastify, { type RouteShorthandOptions } from "fastify"
import { Injector, controllerInjector } from "../../injector/injector"
import type { PostResponse } from "../../response/post"
import { Post } from "../../../entity/domain/post/post"

const server = fastify()

const pingOpts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string"
          }
        }
      }
    }
  }
}

const injector = new Injector(controllerInjector)

server.get("/ping", pingOpts, () => {
  return { pong: "it worked!" }
})

//ここからGet
interface GetPostHandler {
  Params: {
    id: string
  }
  Reply: {
    post: PostResponse
  }
}

server.get<GetPostHandler>("/posts/:id", async (request, _reply) => {
  const postDTO = await injector.controller.post.findById(request.params.id)
  return {
    post: {
      id: postDTO.id,
      title: postDTO.title,
      content: postDTO.content
    }
  }
})

//ここからPost
export interface CreatePostResponse {
  post: PostResponse
}

interface CreatePostHandler {
  Body: {
    title: string
    content: string
    status: string
  }
  Reply: CreatePostResponse
}

// http://localhost:8080/posts POST {"title":"ほげ","content":"内容"}

server.post<CreatePostHandler>("/posts", async (request, _reply) => {
  return await injector.controller.post.create(request.body.title, request.body.content, request.body.status)
})

//ここからUpdate
interface UpdatePostHandler {
  Body: {
    // id:string
    // title: string
    // content: string
    // status: string
    post: Post
  }
  Reply: {
    post: PostResponse
  }
}

// http://localhost:8080/posts PUT {"id":"qfdfqfjnasiufdlausbfdajs","title":"ほげ","content":"内容"}
server.post<UpdatePostHandler>("/posts/:id", async (request, _reply) => {
  const postDTO = await injector.controller.post.update(request.body.post)
  return {
    post: {
      id: postDTO.id,
      title: postDTO.title,
      content: postDTO.content
    }
  }
})


const start = async () => {
  try {
    await server.listen({ port: 8080 })
    // const address = server.server.address()
    // const _port = typeof address === "string" ? address : address?.port
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
