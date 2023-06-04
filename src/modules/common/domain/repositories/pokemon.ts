import { AxiosResponse } from "axios";
import { GetPokemon, GetPokemonList } from "../requests";

export interface PokemonRepository {
  getPokemon(id: GetPokemon.Input): Promise<AxiosResponse<GetPokemon.Output>>;
  getPokemonList(
    params: GetPokemonList.Input
  ): Promise<AxiosResponse<GetPokemon.Output>>;
}
