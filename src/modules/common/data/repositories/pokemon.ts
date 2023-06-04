import { makeBaseRepository } from "@/modules/core/data";
import { BaseRepository } from "@/modules/core/domain";
import { GetPokemon, GetPokemonList, PokemonRepository } from "../../domain";

class PokemonRepositoryImpl implements PokemonRepository {
  private repository: BaseRepository;

  constructor(repository: BaseRepository) {
    this.repository = repository;
  }

  async getPokemon(params: GetPokemon.Input) {
    return await this.repository.get<GetPokemon.Output>(GetPokemon.URL(params));
  }

  async getPokemonList(params: GetPokemonList.Input) {
    return await this.repository.get<GetPokemonList.Output>(
      GetPokemonList.URL,
      {
        params,
      }
    );
  }
}

export const makePokemonRepository = () =>
  new PokemonRepositoryImpl(makeBaseRepository());
