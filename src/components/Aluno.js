import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Aluno = (props) => (
    <View style={style.Container}>
        <Text style={style.Text}>Nome: Matheus André Alves da Silva</Text>
        <Text style={style.Text}>Curso: Analise e desenvolvimento de sistemas</Text>
        <Text></Text>
        <Text style={style.Text}>Melhor aluno? Claro</Text>
    </View>
)

const style = StyleSheet.create({
    Text:{
    color:'#fff',
    textAlign: 'center',
    fontSize: 18
    },
    Container:{
        borderColor: '#444',
        borderWidth: 1,
        backgroundColor: '#222'
    }
});

export default Aluno;