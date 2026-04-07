import React from "react";
import { StyleSheet } from "react-native";
import Contenedor from "./componentes/contenedores/Contenedor";
import FormularioParaAgregarItem from "./componentes/controladores/FormularioParaAgregarItem";
import Titulo from "./componentes/contenidos/Titulo";
import usarFuncionesParaProductos from "./hooks/usarFuncionesParaProductos";//
import ListaDeProductos from "./componentes/controladores/ListaDeProductos";


export default function App() {
  const { agregarProducto, eliminarProducto, cambiarProducto, obtenerProductos } = usarFuncionesParaProductos();

  return (
    <Contenedor>
      <Titulo />

      <FormularioParaAgregarItem alCompletarseElFormulario={agregarProducto} />

      <ListaDeProductos
        items={obtenerProductos} //Array de objetos
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
