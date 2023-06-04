import { BaseRepository } from "../../domain";
import { makeBaseRepository } from "../repositories/base";

export abstract class BaseUseCase {}

class BaseUseCaseImplement extends BaseUseCase {
  private baseRepository;

  constructor(baseRepository: BaseRepository) {
    super();
    this.baseRepository = baseRepository;
  }
}

export const makeBaseUseCase = () =>
  new BaseUseCaseImplement(makeBaseRepository());
