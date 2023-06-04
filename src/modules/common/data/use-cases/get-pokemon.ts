import { makePokemonRepository } from "..";
import { GetPokemon, PokemonRepository } from "../../domain";

export class GetPokemonUseCase {
  private repository;
  constructor(repository: PokemonRepository) {
    this.repository = repository;
  }

  async execute(params: GetPokemon.Input) {
    try {
      const response = await this.repository.getPokemon(params);
      return response.data;
    } catch (error) {
      throw error as GetPokemon.ErrorResponse;
    }
  }
}

export const makeGetPokemon = () =>
  new GetPokemonUseCase(makePokemonRepository());
