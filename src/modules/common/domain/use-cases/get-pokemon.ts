import { Pokemon } from "../entities";

export abstract class GetPokemonUseCase {
  async execute(): Promise<Pokemon> {
    // we will return a hardcoded value, but in a real application we would call the repository to get the data.
    return {
      id: 1,
      name: "Bulbasaur",
      order: 1,
      height: 7,
      weight: 69,
    };
  }
}
