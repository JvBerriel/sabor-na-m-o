export interface MenuItem {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export interface OrderHistory {
  id: number;
  data: string;
  itens: string[];
  total: number;
  status: string;
}
