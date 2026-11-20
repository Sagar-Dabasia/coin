export interface Fortune {
  id: number;
  side: 'heads' | 'tails';
  headline: string;
  decree: string;
  latinMotto: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  byline: string;
}
