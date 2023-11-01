import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, InputField, Switch, Text } from "@gluestack-ui/themed";
import { useState } from "react";

import homem from "../../../assets/homem.png"
import mulher from "../../../assets/mulher.png"


export default function Main() {
    const [peso, setPeso] = useState("72")
    const [altura, setAltura] = useState("1.70")
    const [sexo, setSexo] = useState(false)
    const [resultado, setResultado] = useState("")

    const calcularHandle = () => {
        let alturaConvertida = parseFloat(altura, 10)
        let result = 0

        if(altura>2.2) {
            setResultado("A altura deve ser menor que 2.2")
            return;
        }

        if (sexo) {
            result = (62.1*alturaConvertida)-44.7
            //mulher
        } else {
            //homem
            result = (72.7*alturaConvertida)-58
        }
        setResultado(Math.round(result))
    }
    
    const limparHandle = () => {
        setPeso("72")
        setAltura("1.70")
        setSexo(false)
        setResultado("")
    }




    return <Box bg="$primary100" p="$5" h={300} w={300} borderRadius={"$md"}>
        <Center h={"$full"}>
            <FormControl>
            <Heading>Peso Ideal</Heading>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Peso</FormControlLabelText>
                </FormControlLabel>
            </FormControl>   
            <Input w={"$full"}>
                <InputField value={peso} onChangeText={setPeso} keyboardType="numeric" />
            </Input>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Altura</FormControlLabelText>
                </FormControlLabel>
            </FormControl>   
            <Input w={"$full"} >
                <InputField value={altura} onChangeText={setAltura} keyboardType="number-pad"/>
            </Input>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Sexo</FormControlLabelText>
                </FormControlLabel>
            </FormControl>   
            <HStack w={"$full"} space={md} justifyContent="center" alignItems="center">
                <FormControlLabelText>Homem</FormControlLabelText>
                <Switch value={sexo} onChange={setSexo} />
                <FormControlLabelText>Mulher</FormControlLabelText>
            </HStack>
            <Button onPress={calcularHandle}>
                <ButtonText p={5}>Calcular</ButtonText>
            </Button>
            <Button onPress={limparHandle}>
                <ButtonText p={5}>Limpar</ButtonText>
            </Button>
            <Box justifyContent="space-around" alignItems="center" height={100} flexDirection="row">
                <Text> Resultado: </Text>
                <Text> {resultado} </Text>
            </Box>
        </FormControl>
        <Image source={sexo ? mulher : homem} alt="imagem do tipo de sexo "/>
        </Center>
    </Box>
}