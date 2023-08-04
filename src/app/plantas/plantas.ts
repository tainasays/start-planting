export interface IPlanta {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

// Fotos de <a href="https://unsplash.com/pt-br/@feeypflanzen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">feey</a> na <a href="https://unsplash.com/pt-br/fotografias/um-vaso-de-planta-sentado-em-cima-de-uma-mesa-de-madeira-oQPhVYCqgcg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
export interface IPlantaCarrinho extends IPlanta {
    quantidade: number;
}

export const plantas: IPlanta[] = [
    { id: 1, descricao: "Alocacia", preco: 439.00, descricaoPreco: "À vista", imagem: "./assets/planta-1.jpg", quantidadeEstoque: 3},
    { id: 2, descricao: "Espada-de-São-Jorge", preco: 1200.50, descricaoPreco: "À vista no PIX", quantidadeEstoque: 50, imagem: "./assets/espada-1.jpg" },
    { id: 3, descricao: "Begônia", preco: 749.99, descricaoPreco: "À vista", imagem: "./assets/colorida-1.jpg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Antúrio", preco: 599.99, descricaoPreco: "À vista", imagem: "./assets/folhas-largas-1.jpg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Asplênio", preco: 299.99, descricaoPreco: "À vista", imagem: "./assets/folha-comprida-1.jpg", quantidadeEstoque: 4 },
    { id: 6, descricao: "Jiboia", preco: 399.99, descricaoPreco: "À vista", imagem: "./assets/folhas-largas-2.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Espada-de-São-Jorge", preco: 499.99, descricaoPreco: "À vista", imagem: "./assets/espada-3.jpg", quantidadeEstoque: 7 },
    { id: 8, descricao: "Espada-de-São-Jorge", preco: 18449.99, descricaoPreco: "À vista", imagem: "./assets/espada-2.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Monstera", preco: 1000, descricaoPreco: "À vista", imagem: "./assets/planta-2.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Hera", preco: 2500, descricaoPreco: "À vista", imagem: "./assets/suspensa-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Filodendro-brasil", preco: 4500, descricaoPreco: "À vista", imagem: "./assets/trepadeira-1.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Zamioculca", preco: 20, descricaoPreco: "Parcelado ou à vista", imagem: "./assets/planta-3.jpg", quantidadeEstoque: 10 },
    { id: 13, descricao: "Jiboia", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/trepadeira-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Filodendro", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/folhas-largas-3.jpg", quantidadeEstoque: 14 },
    { id: 15, descricao: "Jiboia", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/trepadeira-3.jpg", quantidadeEstoque: 2 },
]