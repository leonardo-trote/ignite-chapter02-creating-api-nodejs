import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {

    constructor(private createSpeficicationUseCase: CreateSpecificationUseCase) {

    }

    handle(request: Request, response: Response) {
        const { name, description } = request.body

        this.createSpeficicationUseCase.execute({ name, description })

        return response.status(201).send()
    }

}

export { CreateSpecificationController }