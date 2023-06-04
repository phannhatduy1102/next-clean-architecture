import { useQuery } from "@tanstack/react-query";
import { makeGetPokemon } from "../../data";
import { GetPokemon } from "../../domain";
import { BaseErrorResponse } from "@/modules/core/domain";

export const useGetPokemonQuery = (id: number) => {
  const params = String(id);
  const key = GetPokemon.QUERY_KEY;

  return useQuery<GetPokemon.Output, BaseErrorResponse>({
    queryKey: [key, params],
    queryFn: () => makeGetPokemon().execute(params),
  });
};
