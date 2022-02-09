import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {

    constructor(private speficationRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {

        const specificationAlreadyExists = this.speficationRepository.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }


        this.speficationRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationService }