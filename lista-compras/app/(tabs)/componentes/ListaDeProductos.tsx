import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { FilaPorProducto } from "./FilaPorProducto"; 

interface ListaDeProductosProps {
  items: any[];
  alPresionarItem: (id: string) => void; 
  alMantenerPresionadoItem: (id: string) => void;
}
export const ListaDeProductos = ({ 
  items, 
  alPresionarItem, 
  alMantenerPresionadoItem 
}: ListaDeProductosProps) => {

  const renderizarFila = ({ item }: { item: any }) => (
    <FilaPorProducto
      item={item} 
      alPresionar={alPresionarItem} 
      alMantenerPresionado={alMantenerPresionadoItem} 
    />
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id} 
      renderItem={renderizarFila}
      ListEmptyComponent={
        <Text style={styles.vacio}>Sin productos. ¡Agregá el primero! 😊</Text>
      }
      ItemSeparatorComponent={() => <View style={styles.separador} />}
      contentContainerStyle={styles.contenedorLista}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  addBtn: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addTxt: { color: "#fff", fontWeight: "600" },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowText: { fontSize: 16 },
  done: { textDecorationLine: "line-through", color: "#999" },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    lineHeight: 28,
    fontWeight: "700",
    overflow: "hidden",
  },
  pillTodo: { backgroundColor: "#eee", color: "#666" },
  pillDone: { backgroundColor: "#2ecc71", color: "#fff" },
  sep: { height: 1, backgroundColor: "#eee" },
  empty: { textAlign: "center", color: "#777", marginTop: 24 },
});