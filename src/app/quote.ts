export interface Quote {
  // this is the interface for the quote object
  id?: number;
  text: string;
  author: string;
  date: string;
  upvotes: number;
  downvotes: number;
}
