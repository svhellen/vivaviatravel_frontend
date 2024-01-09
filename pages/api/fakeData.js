const fakeDestinoData = [
  {
    id: 1,
    imgSrc: "/images/cidades/rio-rj.jpg",
    cidade: "Rio de Janeiro",
    UF: "RJ",
  },
  {
    id: 2,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    cidade: "Porto Seguro",
    UF: "BA",
  },
  {
    id: 3,
    imgSrc: "/images/cidades/recife-pe.jpg",
    cidade: "Recife",
    UF: "PE",
  },
  {
    id: 4,
    imgSrc: "/images/cidades/bh-mg.jpg",
    cidade: "Belo Horizonte",
    UF: "MG",
  },
  {
    id: 5,
    imgSrc: "/images/cidades/sp.jpg",
    cidade: "São Paulo",
    UF: "SP",
  },
];

const fakePassagemData = [
    {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    {
      id: 3,
      imgSrc: '/images/hoteis/ex-3.jpg',
      classe: 'Econômica',
      data: '28-05-2024',
      origem: 'São Paulo - SP',
      destino: 'Fortaleza - CE',
      preco: 357,
    },
    {
      id: 4,
      imgSrc: '/images/hoteis/ex-2.jpg',
      classe: 'Econômica',
      data: '06-11-2024',
      origem: 'São Paulo - SP',
      destino: 'Maceio - AL',
      preco: 349,
    },
    {
      id: 5,
      imgSrc: '/images/hoteis/ex-2.jpg',
      classe: 'Executiva',
      data: '24-03-2023',
      origem: 'Rio de Janeiro - RJ',
      destino: 'São Paulo - SP',
      preco: 338,
    },
    {
      id: 6,
      imgSrc: '/images/hoteis/ex-2.jpg',
      classe: 'Econômica',
      data: '24-03-2023',
      origem: 'São Paulo - SP',
      destino: 'Rio de Janeiro - RJ',
      preco: 386,
    },
    {
      id: 7,
      imgSrc: '/images/hoteis/ex-2.jpg',
      classe: 'Econômica',
      data: '24-11-2024',
      origem: 'São Paulo - SP',
      destino: 'Recife - PE',
      preco: 357,
    },
    {
      id: 8,
      imgSrc: '/images/hoteis/ex-2.jpg',
      classe: 'Executiva',
      data: '28-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Salvador - BA',
      preco: 338,
    },
];

const fakeHospedagemData = [
  {
    id: 1,
    imgSrc: "/images/hoteis/hotel-5.jpg",
    nomeHotel: "NomeHotel",
    avaliacao: 4.9,
    nomeLocal: 'Porto Seguro - BA',
    descricao: 'Breve descrição do hotel.',
    preco: 230,
  },
  {
    id: 2,
    imgSrc: "/images/hoteis/hotel-3.jpg",
    nomeHotel: "NomeHotel",
    avaliacao: 4.5,
    nomeLocal: 'NomeLocal',
    descricao: 'Breve descrição do hotel.',
    preco: 123,
  },
  {
    id: 3,
    imgSrc: "/images/hoteis/hotel-1.jpg",
    nomeHotel: "NomeHotel",
    avaliacao: 4.7,
    nomeLocal: 'NomeLocal',
    descricao: 'Breve descrição do hotel.',
    preco: 123,
  },
  {
    id: 4,
    imgSrc: "/images/hoteis/hotel-2.jpg",
    nomeHotel: "NomeHotel",
    avaliacao: 4.3,
    nomeLocal: 'NomeLocal',
    descricao: 'Breve descrição do hotel.',
    preco: 123,
 },
 {
  id: 5,
  imgSrc: "/images/hoteis/hotel-1.jpg",
  nomeHotel: "NomeHotel",
  avaliacao: 4.7,
  nomeLocal: 'NomeLocal',
  descricao: 'Breve descrição do hotel.',
  preco: 123,
},
{
  id: 6,
  imgSrc: "/images/hoteis/hotel-2.jpg",
  nomeHotel: "NomeHotel",
  avaliacao: 4.3,
  nomeLocal: 'NomeLocal',
  descricao: 'Breve descrição do hotel.',
  preco: 123,
},
];

const fakePromocaoData = [
  { 
    id: 1,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    hospedagem: {
      id: 1,
      imgSrc: "/images/hoteis/hotel-5.jpg",
      nomeHotel: "NomeHotel",
      avaliacao: 4.9,
      nomeLocal: 'Porto Seguro - BA',
      descricao: 'Breve descrição do hotel.',
      preco: 230,
    },
    passagem: {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    percentPromo: 25,
  },{ 
    id: 2,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    hospedagem: {
      id: 1,
      imgSrc: "/images/hoteis/hotel-5.jpg",
      nomeHotel: "NomeHotel",
      avaliacao: 4.9,
      nomeLocal: 'Porto Seguro - BA',
      descricao: 'Breve descrição do hotel.',
      preco: 230,
    },
    passagem: {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    percentPromo: 10,
  }, { 
    id: 3,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    hospedagem: {
      id: 1,
      imgSrc: "/images/hoteis/hotel-5.jpg",
      nomeHotel: "NomeHotel",
      avaliacao: 4.9,
      nomeLocal: 'Porto Seguro - BA',
      descricao: 'Breve descrição do hotel.',
      preco: 230,
    },
    passagem: {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    percentPromo: 20,
  },  { 
    id: 4,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    hospedagem: {
      id: 1,
      imgSrc: "/images/hoteis/hotel-5.jpg",
      nomeHotel: "NomeHotel",
      avaliacao: 4.9,
      nomeLocal: 'Porto Seguro - BA',
      descricao: 'Breve descrição do hotel.',
      preco: 230,
    },
    passagem: {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    percentPromo: 5,
  },  { 
    id: 5,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    hospedagem: {
      id: 1,
      imgSrc: "/images/hoteis/hotel-5.jpg",
      nomeHotel: "NomeHotel",
      avaliacao: 4.9,
      nomeLocal: 'Porto Seguro - BA',
      descricao: 'Breve descrição do hotel.',
      preco: 230,
    },
    passagem: {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    percentPromo: 15,
  },  { 
    id: 6,
    imgSrc: "/images/cidades/porto-seguro-ba.jpg",
    hospedagem: {
      id: 1,
      imgSrc: "/images/hoteis/hotel-5.jpg",
      nomeHotel: "NomeHotel",
      avaliacao: 4.9,
      nomeLocal: 'Porto Seguro - BA',
      descricao: 'Breve descrição do hotel. ',
      preco: 230,
    },
    passagem: {
      id: 1,
      imgSrc: "/images/cidades/porto-seguro-ba.jpg",
      classe: 'Primeira Classe',
      data: '24-03-2024',
      origem: 'São Paulo - SP',
      destino: 'Porto Seguro - BA',
      preco: 386,
    },
    percentPromo: 25,
  },
];

export default function handler(req, res) {

  const responseData = {
    hospedagens: fakeHospedagemData,
    passagens: fakePassagemData,
    destinos: fakeDestinoData,
    promocoes: fakePromocaoData,

  };

  // response com os dados simulados e um status 200 (OK)
  res.status(200).json(responseData);
}
