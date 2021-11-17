import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  ContainerArtist,
  InputArea,
  ContainerMusic,
  CustomButtonText,
  CustomButton,
} from './styles';

const Home = () => {
  
  const [artist,setArtist] = useState("");

    const [music,setMusic] = useState("");

    const [text,setText] = useState("")

    useEffect(()=>{
        axios.get("https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art="+artist+"&mus="+music).then(res =>{
            console.log(res.data)

            if(res.data.type === "notfound" || res.data === undefined || res.data.mus === undefined){
                setText("Nenhuma música encontrada com essas informações");
            }else if( res.data.mus.length > 0){
               setText(res.data.mus[0].text);
            }   
        })      
    },[artist,music]);

    function handleOnArtistChange(e) {
        setArtist(e.target.value)
    }

    function handleOnMusicChange(e) {
        setMusic(e.target.value)
    }
  
  return (
    <Container>
      <ContainerArtist>
        <CustomButtonText onClick={handleOnArtistChange}>Artista</CustomButtonText>
        {/* add placeholder */}
        <InputArea>
          <Text>Qual o nome do artista?</Text>
        </InputArea>
      </ContainerArtist>

      <ContainerMusic>
        <CustomButtonText onClick={handleOnMusicChange}>Musica</CustomButtonText>
        {/* add placeholder */}
        <InputArea>
          <Text>Insira o nome da música</Text>
        </InputArea>
      </ContainerMusic>

      <CustomButton>
        <CustomButtonText>Pesquisar</CustomButtonText>
      </CustomButton>
    </Container>
  );
};

export default Home;
