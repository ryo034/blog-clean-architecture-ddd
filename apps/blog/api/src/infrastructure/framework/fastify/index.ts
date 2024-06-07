import fastify, { type RouteShorthandOptions } from "fastify"
import { Injector, controllerInjector } from "../../injector/injector"
import type { PostResponse } from "../../response/post"

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

interface CreatePostHandler {
  Body: {
    title: string
    content: string
    status: string
  }
  Reply: {
    post: PostResponse
  }
}

// http://localhost:8080/posts POST {"title":"ほげ","content":"内容"}

server.post<CreatePostHandler>("/posts", async (request, _reply) => {
  const postDTO = await injector.controller.post.create(request.body.title, request.body.content, request.body.status)
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
