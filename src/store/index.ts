import { writable } from 'svelte/store';

export interface Speak {
  speaking: boolean
  selif: string
}

export const speak = writable<Speak>({
  speaking: false,
  selif: ''
});
