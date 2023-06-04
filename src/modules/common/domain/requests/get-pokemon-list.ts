import { API_ENDPOINT, BaseErrorResponse } from "@/modules/core/domain";
import { BaseQueryParams } from "@/modules/core/domain/entities/base-request";
import { Pokemon } from "../entities";

export namespace GetPokemonList {
  export const URL = API_ENDPOINT.POKEMON.GET_POKEMON_LIST;

  export type Input = BaseQueryParams;

  export type Output = Pokemon;

  export type ErrorResponse = BaseErrorResponse;
}
