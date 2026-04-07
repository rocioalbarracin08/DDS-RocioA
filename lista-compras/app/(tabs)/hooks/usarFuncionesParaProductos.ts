import { useState } from "react";
import { ItemParaListaDeCompras } from "../tipos/ItemParaListaDeCompras"; 


const usarFuncionesParaProductos = () => {
  const [items, setItems] = useState<ItemParaListaDeCompras[]>([]); 

  const agregarProducto = (item: string) => {
    const trimmed = item.trim();
    if (!trimmed) return;
    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
  };

  const cambiarProducto = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

  const eliminarProducto = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return {
    agregarProducto,
    cambiarProducto,
    eliminarProducto,
    obtenerProductos: () => items,
  } as const;
};

export default usarFuncionesParaProductos;
