import { replaceUrl } from "@/modules/core/presenters";
import { Pokemon } from "../entities";
import { API_ENDPOINT, BaseErrorResponse } from "@/modules/core/domain";

export namespace GetPokemon {
  export const URL = (id: Input) =>
    replaceUrl(API_ENDPOINT.POKEMON.GET_POKEMON, {
      id,
    });

  export const QUERY_KEY = "getPokemon";

  export type Input = string;

  export type Output = Pokemon;

  export type ErrorResponse = BaseErrorResponse;
}
