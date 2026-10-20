export type BookVolume = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    publishedDate?: string;
    imageLinks?: { thumbnail?: string; smallThumbnail?: string };
  };
};

export type BooksResponse = {
  totalItems: number;
  items?: BookVolume[];
};

export async function searchBooks(query: string): Promise<BooksResponse> {
  if (!query.trim()) return { totalItems: 0, items: [] };

  const res = await fetch(`/api/books?q=${encodeURIComponent(query)}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Request failed: ${res.status}`);
  }

  return res.json();
}