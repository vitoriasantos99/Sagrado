import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, View } from "react-native";

export default props => {

    const entrada = props.entrada
    const saida = props.saida
    
    const [resultado,setResultado] = useState("")
    const [result, setResult] = useState("")

    entrar = () => {
        setResultado("Bem-Vindo")
    }

    sair = () => {
        setResult("Tchau")
    }

    return(
        <SafeAreaView>
            <TextInput
                style={style.fundo}
                onChangeText={""}
                value={""}
                placeholder="Insira seu usuário"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                cursorColor="#ffffff"
            />

            <View style={style.botao}>  
                <Button
                title="Entrar"
                onPress={entrar}
                color={"#8544aa"}
                />
            </View>
            <View style={style.botao}>
                <Button
                title="Sair"
                onPress={sair}
                color={"#8544aa"}
                />
            </View>
            <Text style={resposta.texto}>{resultado}</Text>
            <Text style={resposta.texto}>{result}</Text>
        
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        botao:{
            marginLeft: 25,
            marginRight: 25,
            margin: 10,
        }
    }
)

const resposta = StyleSheet.create(
    {
        texto:{
            textAlign: 'center',
            fontSize: 30,
        }
    }
)