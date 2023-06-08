import React from "react";
import { StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { Box, Text } from "native-base";
import ListaVideos from "../Components/ListaVideos"
import TrainingContext from "../contexts/TrainingContext";

export function levelConvert(level) {
    switch (level) {
        case 0:
            return 'Fácil'
        case 1:
            return 'Média'
        case 2:
            return 'Difícil'
        default:
            break;
    }
}

export function TutorialsPage() {
    const { exercises } = React.useContext(TrainingContext);
    return (

        <Box h='100%'>
            <Box bg="secondary.600" style={styles.containerGeral}>
                <Text style={styles.propTxt}>Tutoriais de Exercícios:</Text>
                <FlatList contentContainerStyle={{ alignItems: 'center', }}
                    data={exercises}
                    renderItem={({ item }) => <ListaVideos nomeex={item.name} nivel={"Dificuldade: " + levelConvert(item.level)} imagePath={item.imageData} />}
                    keyExtractor={item => item.id}
                />
            </Box>
        </Box>



    )


}

const styles = StyleSheet.create({
    containerGeral: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    propTxt: {
        marginTop: 20,
        marginBottom: 20,
        left: 20,
        color: '#FFF',
        fontSize: 15,
        width: '100%'

    }
})
