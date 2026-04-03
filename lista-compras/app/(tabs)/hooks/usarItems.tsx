import { useState } from "react";
import { ItemParaListaDeCompras } from "../tipos/ItemParaListaDeCompras"; 


const usarItems = () => {
  const [items, setItems] = useState<ItemParaListaDeCompras[]>([]); //Quitar??

  const agregarItem = (item: string) => {
    const trimmed = item.trim();
    if (!trimmed) return;
    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
  };

  const cambiarItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

  const eliminarItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return {
    agregarItem,
    cambiarItem,
    eliminarItem,
    obtenerItems: () => items,
  } as const;
};

export default usarItems;
