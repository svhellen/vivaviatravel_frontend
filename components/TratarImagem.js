import Image from 'next/image';
//import defaultImage from '../images/default-image.jpg';

const TratarImagem = ({ imageUrl }) => {

  const defaultImage = "https://picsum.photos/500/300/?blur=10";

  const checkImageExistence = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'HEAD', // utiliza o método HEAD para verificar apenas a existência sem baixar a imagem completa
      });

      return response.ok; //retorna true se a resposta for bem-sucedida (status 2xx)

    } catch (error) {
      console.error('Erro ao verificar existência da imagem:', error);
      return false; // em caso de erro, assume que a imagem não existe
    }
  };

  const loadImage = async () => {
    const imageExists = await checkImageExistence(imageUrl);

    return (
      <>
        {imageExists ? (
          <Image src={imageUrl} alt="Minha Imagem" width={500} height={300} />
        ) : (
          <Image src={defaultImage} alt="Imagem Padrão" width={500} height={300} />
        )}
      </>
    );
  };

  return loadImage();
};

export default TratarImagem;
