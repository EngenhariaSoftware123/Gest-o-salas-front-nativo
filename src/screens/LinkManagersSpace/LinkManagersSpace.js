import React, { useState } from "react";
import {
    Container,
    TextTitle,
    TextLabel,
    StyledTextInput,
    TouchableOpacity,
    TextButton,
} from "./Styles.js"; // Aliased TextInput import

export default function LinkManagersSpace() {
    const [emailGestor, setEmailGestor] = useState("");
    const [pesquisarLocal, setpesquisarLocal] = useState("");
    const [reserva, setreserva] = useState("");
    const [mostrarCampo, setMostrarCampo] = useState(false); // Estado para controlar a visibilidade do campo combinado

    const handleInputChange = () => {
        const combinedText = `${emailGestor};${pesquisarLocal};${reserva}`;
        console.log("Email do Gestor: ", emailGestor);
        console.log("Pesquisar Local: ", pesquisarLocal);
        console.log("Reserva ou de Serviço: ", reserva);
        console.log("Texto Combinado: ", combinedText);
        setMostrarCampo(true); // Mostra o campo combinado após pressionar o botão "Pesquisar"
    };

    return (
        <Container>
            <TextTitle>Vincular Gestor de Espaço</TextTitle>

            <TextLabel>E-mail do Gestor</TextLabel>
            <StyledTextInput
                multiline
                placeholder="Digite E-mail do Gestor"
                value={emailGestor}
                onChangeText={(text) => setEmailGestor(text)}
            />

            <TextLabel>Pesquisar Local</TextLabel>
            <StyledTextInput
                multiline
                placeholder="Procure pela pesquisar local"
                value={pesquisarLocal}
                onChangeText={(text) => setpesquisarLocal(text)}
            />

            <TextLabel>Reserva ou de Serviçor</TextLabel>
            <StyledTextInput
                multiline
                placeholder="Reserva ou de Serviçor"
                value={reserva}
                onChangeText={(text) => setreserva(text)}
            />

            <TouchableOpacity onPress={handleInputChange}>
                <TextButton>Pesquisar</TextButton>
            </TouchableOpacity>

            {mostrarCampo && (
                <StyledTextInput
                    multiline
                    placeholder="Email do gestor Pesquisar local; Reserva"
                    value={`${emailGestor}\n${pesquisarLocal}\n${reserva}`}
                    editable={false}
                />
            )}
        </Container>
    );
}
