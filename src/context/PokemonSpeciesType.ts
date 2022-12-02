export interface PokemonSpeciesType {
    effect_changes?: (EffectChangesEntity)[] | null;
    effect_entries?: (EffectEntriesEntity)[] | null;
    flavor_text_entries?: (FlavorTextEntriesEntity)[] | null;
    generation: LanguageOrVersionGroupOrPokemonOrGeneration;
    id: number;
    is_main_series: boolean;
    name: string;
    names?: (NamesEntity)[] | null;
    pokemon?: (PokemonEntity)[] | null;
}
export interface EffectChangesEntity {
    effect_entries?: (EffectEntriesEntity1)[] | null;
    version_group: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface EffectEntriesEntity1 {
    effect: string;
    language: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface LanguageOrVersionGroupOrPokemonOrGeneration {
    name: string;
    url: string;
}
export interface EffectEntriesEntity {
    effect: string;
    language: LanguageOrVersionGroupOrPokemonOrGeneration;
    short_effect: string;
}
export interface FlavorTextEntriesEntity {
    flavor_text: string;
    language: LanguageOrVersionGroupOrPokemonOrGeneration;
    version_group: LanguageOrVersionGroupOrPokemonOrGeneration;
}
export interface NamesEntity {
    language: LanguageOrVersionGroupOrPokemonOrGeneration;
    name: string;
}
export interface PokemonEntity {
    is_hidden: boolean;
    pokemon: LanguageOrVersionGroupOrPokemonOrGeneration;
    slot: number;
}
