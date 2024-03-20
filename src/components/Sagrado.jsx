
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, Image, View, Alert } from "react-native";

export default props =>{
    const [usuario,setUsuario] = useState('')
    const [senha,setSenha] = useState('')
    const [aviso,setAviso] = useState('')

    function entrar (){
        if (usuario === "vitoria" && senha === '123'){
            setAviso ("Bem vindo");
        }
        else {
            console.warn ("Usuario e senha incorreto");
        }
        
    }
    
    return(
        <SafeAreaView style={style.menu}>
            <Text style={style.menu}>Sagrado Feminino Hair</Text>
            <Image
                source={require('../images/homem.png')}
                style={imagem.logo}
            />

            <TextInput
                style={style.fundo}
                onChangeText={setUsuario}
                value={usuario}
                placeholder="Insira seu usuário"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                cursorColor="#ffffff"
            />

            <TextInput
                style={style.fundo}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                placeholder="Insira sua Senha"
                placeholderTextColor="#ffffff"
                keyboardType="numeric"
                cursorColor="#ffffff"
            />

            <Text style={style.novo}>Não tem usuário? Clique Aqui!</Text>
            
        <SafeAreaView>
            <View style={novo.botao}>  
                <Button
                title="Entrar"
                onPress={entrar}
                color={"#ac635b"}
                />
            </View>

            <View style={novo.botao}>
                <Button
                title="Sair"
                onPress={entrar}
                color={"#ac635b"}
                />
            </View>

            <Text style={resposta.texto}>{''}</Text>
            <Text style={resposta.texto}>{''}</Text>

        </SafeAreaView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            textAlign: 'center',
            borderWidth: 1,
            backgroundColor: '#ac635b',
            margin: 3,
            borderColor: '#ac635b',
            borderTopLeftRadius: 3,
            borderTopRightRadius:3,
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
            fontSize: 18,
        },
        novo:{
            textAlign: 'right',
            color: '#ffffff',
            padding: 5,
            color: "#ffd1c1"
        },
        menu:{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 25,
            margin: 20,
            color: '#ffd1c1',
        }
    }
)

const imagem = StyleSheet.create(
    {
        logo:{
            width: 180,
            height: 180,
            alignSelf: 'center',
            margin: 10,
        }
    }
)

const novo = StyleSheet.create(
    {
        botao:{
            marginLeft: 30,
            marginRight: 30,
            margin: 5,
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