import { makePokemonRepository } from "..";
import { GetPokemonList, PokemonRepository } from "../../domain";

export class GetPokemonListUseCase {
  private repository;
  constructor(repository: PokemonRepository) {
    this.repository = repository;
  }

  async execute(params: GetPokemonList.Input) {
    try {
      const response = await this.repository.getPokemonList(params);
      return response.data;
    } catch (error) {
      throw error as GetPokemonList.ErrorResponse;
    }
  }
}

export const makeGetPokemonList = () =>
  new GetPokemonListUseCase(makePokemonRepository());
