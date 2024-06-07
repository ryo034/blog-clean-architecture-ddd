import type { PostRepository } from "../../entity/domain/post/repository"
import { PostController } from "../../interface/controller/post"
import { PostGateway } from "../../interface/gateway/post"
import { PostPresenter } from "../../interface/presenter/post"
import type { PostInputPort } from "../../usecase/post/input"
import { PostInteractor } from "../../usecase/post/interactor"
import type { PostOutputPort } from "../../usecase/post/output"
import { PostDriver } from "../driver/post"

class DriverInjector {
  constructor(readonly post: PostDriver = new PostDriver()) {}
}

class RepositoryInjector {
  constructor(
    readonly driver: DriverInjector,
    public post: PostRepository = new PostGateway(driver.post)
  ) {}
}

class OutputPostInjector {
  constructor(public post: PostOutputPort = new PostPresenter()) {}
}

class UseCaseInjector {
  constructor(
    readonly repository: RepositoryInjector,
    readonly output: OutputPostInjector,
    public post: PostInputPort = new PostInteractor(repository.post, output.post)
  ) {}
}

class ControllerInjector {
  constructor(
    readonly useCase: UseCaseInjector,
    public post: PostController = new PostController(useCase.post)
  ) {}
}

export class Injector {
  constructor(public controller: ControllerInjector) {}
}

const driverInjector = new DriverInjector()
const repositoryInjector = new RepositoryInjector(driverInjector)
const outputPostInjector = new OutputPostInjector()
const useCaseInjector = new UseCaseInjector(repositoryInjector, outputPostInjector)
export const controllerInjector = new ControllerInjector(useCaseInjector)
