import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CurentlyReading from "../../components/CurentlyReading";
import { useTheme } from '../../hooks/useTheme';
import { BookVolume, searchBooks } from "../../lib/booksApi";
export default function Index() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<BookVolume[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchBooks(query);
      setBooks(data.items ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <CurentlyReading />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
