import { MenuItem, OrderHistory } from "@/types/menu";
import strogonoffImg from "@/assets/strogonoff.jpg";
import lasagnaImg from "@/assets/lasagna.jpg";
import caesarSaladImg from "@/assets/caesar-salad.jpg";
import tiramisuImg from "@/assets/tiramisu.jpg";
import orangeJuiceImg from "@/assets/orange-juice.jpg";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nome: "Strogonoff de Frango",
    categoria: "Pratos Principais",
    descricao: "Delicioso strogonoff com arroz e batata frita",
    preco: 32.9,
    imagem: strogonoffImg,
  },
  {
    id: 2,
    nome: "Lasanha Bolonhesa",
    categoria: "Pratos Principais",
    descricao: "Lasanha artesanal com molho bolonhesa",
    preco: 38.9,
    imagem: lasagnaImg,
  },
  {
    id: 3,
    nome: "Salada Caesar",
    categoria: "Entradas",
    descricao: "Salada com frango grelhado e molho caesar",
    preco: 24.9,
    imagem: caesarSaladImg,
  },
  {
    id: 4,
    nome: "Tiramisu",
    categoria: "Sobremesas",
    descricao: "Sobremesa italiana clássica",
    preco: 18.9,
    imagem: tiramisuImg,
  },
  {
    id: 5,
    nome: "Suco Natural",
    categoria: "Bebidas",
    descricao: "Suco natural de laranja",
    preco: 8.9,
    imagem: orangeJuiceImg,
  },
];

export const orderHistory: OrderHistory[] = [
  {
    id: 101,
    data: "2024-11-10",
    itens: ["Strogonoff de Frango"],
    total: 32.9,
    status: "Entregue",
  },
  {
    id: 102,
    data: "2024-11-12",
    itens: ["Lasanha Bolonhesa", "Suco Natural"],
    total: 47.8,
    status: "Entregue",
  },
];

export const categories = [
  "Todos",
  "Entradas",
  "Pratos Principais",
  "Sobremesas",
  "Bebidas",
];
