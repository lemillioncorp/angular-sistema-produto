export class Produto {
    constructor(
        public id: Number,
        public nomeProduto: String,
        public preco: String,
        public fornecedor: String,
        public estadoVenda: Boolean,
    ) { }
}
