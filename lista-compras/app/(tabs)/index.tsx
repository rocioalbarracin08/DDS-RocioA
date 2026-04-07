import React from "react";
import { StyleSheet } from "react-native";
import Contenedor from "../../src/componentes/contenedores/Contenedor";
import Titulo from "../../src/componentes/contenidos/Titulo";
import FormularioParaAgregarItem from "../../src/componentes/controladores/FormularioParaAgregarItem";
import ListaDeProductos from "../../src/componentes/controladores/ListaDeProductos";
import useFuncionesParaProductos from "../../src/hooks/usarFuncionesParaProductos"; //

export default function App() {
  const { agregarProducto, eliminarProducto, cambiarProducto, items } =
    useFuncionesParaProductos();

  return (
    <Contenedor>
      <Titulo />

      <FormularioParaAgregarItem alCompletarseElFormulario={agregarProducto} />

      <ListaDeProductos
        items={items}
        alPresionarElProducto={cambiarProducto}
        alMantenerPresionadoElProducto={eliminarProducto}
      />
    </Contenedor>
  );
}

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
