import { MenuItem, OrderHistory } from "@/types/menu";

// Entradas
import caesarSaladImg from "@/assets/caesar-salad.jpg";
import bruschettaImg from "@/assets/bruschetta.jpg";
import carpaccioImg from "@/assets/carpaccio.jpg";
import coxinhaImg from "@/assets/coxinha.jpg";
import bolinhoBacalhauImg from "@/assets/bolinho-bacalhau.jpg";
import camaraoAlhoImg from "@/assets/camarao-alho.jpg";
import sopaCebolaImg from "@/assets/sopa-cebola.jpg";
import capreseImg from "@/assets/caprese.jpg";
import pasteisImg from "@/assets/pasteis.jpg";
import calamariImg from "@/assets/calamari.jpg";

// Pratos Principais
import strogonoffImg from "@/assets/strogonoff.jpg";
import lasagnaImg from "@/assets/lasagna.jpg";
import feijoadaImg from "@/assets/feijoada.jpg";
import picanhaImg from "@/assets/picanha.jpg";
import salmaoImg from "@/assets/salmao.jpg";
import risotoImg from "@/assets/risoto.jpg";
import frangoParmegiana from "@/assets/frango-parmegiana.jpg";
import moquecaImg from "@/assets/moqueca.jpg";
import fileMignonImg from "@/assets/file-mignon.jpg";
import carbonaraImg from "@/assets/carbonara.jpg";

// Sobremesas
import tiramisuImg from "@/assets/tiramisu.jpg";
import brownieImg from "@/assets/brownie.jpg";
import pudimImg from "@/assets/pudim.jpg";
import petitGateauImg from "@/assets/petit-gateau.jpg";
import pavlovaImg from "@/assets/pavlova.jpg";
import cheesecakeImg from "@/assets/cheesecake.jpg";
import mousseImg from "@/assets/mousse.jpg";
import tortaLimaoImg from "@/assets/torta-limao.jpg";
import brigadeiroImg from "@/assets/brigadeiro.jpg";
import pannaCottaImg from "@/assets/panna-cotta.jpg";

// Bebidas
import orangeJuiceImg from "@/assets/orange-juice.jpg";
import refrigeranteImg from "@/assets/refrigerante.jpg";
import aguaGasImg from "@/assets/agua-gas.jpg";
import limonadaImg from "@/assets/limonada.jpg";
import chaGeladoImg from "@/assets/cha-gelado.jpg";
import milkshakeImg from "@/assets/milkshake.jpg";
import cafeExpressoImg from "@/assets/cafe-expresso.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import smoothieImg from "@/assets/smoothie.jpg";
import aguaCocoImg from "@/assets/agua-coco.jpg";

export const menuItems: MenuItem[] = [
  // Entradas
  {
    id: 1,
    nome: "Salada Caesar",
    categoria: "Entradas",
    descricao: "Salada com frango grelhado e molho caesar",
    preco: 24.9,
    imagem: caesarSaladImg,
  },
  {
    id: 2,
    nome: "Bruschetta",
    categoria: "Entradas",
    descricao: "Bruschetta italiana com tomate e manjericão",
    preco: 19.9,
    imagem: bruschettaImg,
  },
  {
    id: 3,
    nome: "Carpaccio",
    categoria: "Entradas",
    descricao: "Carpaccio de carne com rúcula e parmesão",
    preco: 32.9,
    imagem: carpaccioImg,
  },
  {
    id: 4,
    nome: "Coxinha",
    categoria: "Entradas",
    descricao: "Coxinhas de frango crocantes",
    preco: 16.9,
    imagem: coxinhaImg,
  },
  {
    id: 5,
    nome: "Bolinho de Bacalhau",
    categoria: "Entradas",
    descricao: "Bolinhos de bacalhau dourados",
    preco: 28.9,
    imagem: bolinhoBacalhauImg,
  },
  {
    id: 6,
    nome: "Camarão ao Alho",
    categoria: "Entradas",
    descricao: "Camarões salteados no alho e óleo",
    preco: 36.9,
    imagem: camaraoAlhoImg,
  },
  {
    id: 7,
    nome: "Sopa de Cebola",
    categoria: "Entradas",
    descricao: "Sopa de cebola gratinada",
    preco: 22.9,
    imagem: sopaCebolaImg,
  },
  {
    id: 8,
    nome: "Caprese",
    categoria: "Entradas",
    descricao: "Salada caprese com mozzarella fresca",
    preco: 26.9,
    imagem: capreseImg,
  },
  {
    id: 9,
    nome: "Pastéis Variados",
    categoria: "Entradas",
    descricao: "Porção de pastéis sortidos",
    preco: 18.9,
    imagem: pasteisImg,
  },
  {
    id: 10,
    nome: "Calamari Frito",
    categoria: "Entradas",
    descricao: "Lulas empanadas crocantes",
    preco: 34.9,
    imagem: calamariImg,
  },

  // Pratos Principais
  {
    id: 11,
    nome: "Strogonoff de Frango",
    categoria: "Pratos Principais",
    descricao: "Delicioso strogonoff com arroz e batata frita",
    preco: 32.9,
    imagem: strogonoffImg,
  },
  {
    id: 12,
    nome: "Lasanha Bolonhesa",
    categoria: "Pratos Principais",
    descricao: "Lasanha artesanal com molho bolonhesa",
    preco: 38.9,
    imagem: lasagnaImg,
  },
  {
    id: 13,
    nome: "Feijoada Completa",
    categoria: "Pratos Principais",
    descricao: "Feijoada tradicional com acompanhamentos",
    preco: 42.9,
    imagem: feijoadaImg,
  },
  {
    id: 14,
    nome: "Picanha na Brasa",
    categoria: "Pratos Principais",
    descricao: "Picanha grelhada com chimichurri",
    preco: 54.9,
    imagem: picanhaImg,
  },
  {
    id: 15,
    nome: "Salmão Grelhado",
    categoria: "Pratos Principais",
    descricao: "Salmão grelhado com legumes",
    preco: 48.9,
    imagem: salmaoImg,
  },
  {
    id: 16,
    nome: "Risoto de Cogumelos",
    categoria: "Pratos Principais",
    descricao: "Risoto cremoso com cogumelos frescos",
    preco: 36.9,
    imagem: risotoImg,
  },
  {
    id: 17,
    nome: "Frango à Parmegiana",
    categoria: "Pratos Principais",
    descricao: "Frango empanado com molho e queijo",
    preco: 34.9,
    imagem: frangoParmegiana,
  },
  {
    id: 18,
    nome: "Moqueca de Peixe",
    categoria: "Pratos Principais",
    descricao: "Moqueca capixaba tradicional",
    preco: 46.9,
    imagem: moquecaImg,
  },
  {
    id: 19,
    nome: "Filé Mignon ao Madeira",
    categoria: "Pratos Principais",
    descricao: "Filé mignon com molho madeira",
    preco: 58.9,
    imagem: fileMignonImg,
  },
  {
    id: 20,
    nome: "Carbonara",
    categoria: "Pratos Principais",
    descricao: "Massa carbonara italiana autêntica",
    preco: 35.9,
    imagem: carbonaraImg,
  },

  // Sobremesas
  {
    id: 21,
    nome: "Tiramisu",
    categoria: "Sobremesas",
    descricao: "Sobremesa italiana clássica",
    preco: 18.9,
    imagem: tiramisuImg,
  },
  {
    id: 22,
    nome: "Brownie com Sorvete",
    categoria: "Sobremesas",
    descricao: "Brownie quente com sorvete de baunilha",
    preco: 16.9,
    imagem: brownieImg,
  },
  {
    id: 23,
    nome: "Pudim de Leite",
    categoria: "Sobremesas",
    descricao: "Pudim caseiro com calda de caramelo",
    preco: 14.9,
    imagem: pudimImg,
  },
  {
    id: 24,
    nome: "Petit Gateau",
    categoria: "Sobremesas",
    descricao: "Bolinho de chocolate com recheio cremoso",
    preco: 22.9,
    imagem: petitGateauImg,
  },
  {
    id: 25,
    nome: "Pavlova",
    categoria: "Sobremesas",
    descricao: "Merengue com creme e frutas vermelhas",
    preco: 19.9,
    imagem: pavlovaImg,
  },
  {
    id: 26,
    nome: "Cheesecake",
    categoria: "Sobremesas",
    descricao: "Cheesecake cremoso com calda de frutas",
    preco: 20.9,
    imagem: cheesecakeImg,
  },
  {
    id: 27,
    nome: "Mousse de Chocolate",
    categoria: "Sobremesas",
    descricao: "Mousse de chocolate belga",
    preco: 15.9,
    imagem: mousseImg,
  },
  {
    id: 28,
    nome: "Torta de Limão",
    categoria: "Sobremesas",
    descricao: "Torta de limão com merengue",
    preco: 17.9,
    imagem: tortaLimaoImg,
  },
  {
    id: 29,
    nome: "Brigadeiro Gourmet",
    categoria: "Sobremesas",
    descricao: "Porção de brigadeiros artesanais",
    preco: 12.9,
    imagem: brigadeiroImg,
  },
  {
    id: 30,
    nome: "Panna Cotta",
    categoria: "Sobremesas",
    descricao: "Panna cotta italiana com calda de frutas",
    preco: 18.9,
    imagem: pannaCottaImg,
  },

  // Bebidas
  {
    id: 31,
    nome: "Suco Natural",
    categoria: "Bebidas",
    descricao: "Suco natural de laranja",
    preco: 8.9,
    imagem: orangeJuiceImg,
  },
  {
    id: 32,
    nome: "Refrigerante",
    categoria: "Bebidas",
    descricao: "Refrigerante gelado lata 350ml",
    preco: 6.9,
    imagem: refrigeranteImg,
  },
  {
    id: 33,
    nome: "Água com Gás",
    categoria: "Bebidas",
    descricao: "Água mineral com gás",
    preco: 5.9,
    imagem: aguaGasImg,
  },
  {
    id: 34,
    nome: "Limonada Suíça",
    categoria: "Bebidas",
    descricao: "Limonada suíça com hortelã",
    preco: 10.9,
    imagem: limonadaImg,
  },
  {
    id: 35,
    nome: "Chá Gelado",
    categoria: "Bebidas",
    descricao: "Chá gelado sabor limão",
    preco: 7.9,
    imagem: chaGeladoImg,
  },
  {
    id: 36,
    nome: "Milkshake",
    categoria: "Bebidas",
    descricao: "Milkshake cremoso de chocolate",
    preco: 14.9,
    imagem: milkshakeImg,
  },
  {
    id: 37,
    nome: "Café Expresso",
    categoria: "Bebidas",
    descricao: "Café expresso italiano",
    preco: 5.9,
    imagem: cafeExpressoImg,
  },
  {
    id: 38,
    nome: "Cappuccino",
    categoria: "Bebidas",
    descricao: "Cappuccino cremoso com canela",
    preco: 9.9,
    imagem: cappuccinoImg,
  },
  {
    id: 39,
    nome: "Smoothie de Frutas",
    categoria: "Bebidas",
    descricao: "Smoothie natural de frutas tropicais",
    preco: 12.9,
    imagem: smoothieImg,
  },
  {
    id: 40,
    nome: "Água de Coco",
    categoria: "Bebidas",
    descricao: "Água de coco natural gelada",
    preco: 7.9,
    imagem: aguaCocoImg,
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
