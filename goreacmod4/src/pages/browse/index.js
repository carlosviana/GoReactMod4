import React from "react";

import { Container, Title, List, PlayList } from "./styles";

const Browse = () => (
    <Container>
        <Title>Navegar</Title>

        <List>
            <PlayList to="/playlists/1">
                <img
                    src="https://http2.mlstatic.com/jorge-arago-20-musicas-do-seculo-x-x-serie-millennium-D_NQ_NP_942611-MLB20583386384_022016-F.jpg"
                    alt="Jorge Aragão"
                />
                <strong>Samba das antigas</strong>
                <p>Curta sua festa com samba da melhor qualidade.</p>
            </PlayList>
            <PlayList to="/playlists/1">
                <img
                    src="https://http2.mlstatic.com/jorge-arago-20-musicas-do-seculo-x-x-serie-millennium-D_NQ_NP_942611-MLB20583386384_022016-F.jpg"
                    alt="Jorge Aragão"
                />
                <strong>Samba das antigas</strong>
                <p>Curta sua festa com samba da melhor qualidade.</p>
            </PlayList>
            <PlayList to="/playlists/1">
                <img
                    src="https://http2.mlstatic.com/jorge-arago-20-musicas-do-seculo-x-x-serie-millennium-D_NQ_NP_942611-MLB20583386384_022016-F.jpg"
                    alt="Jorge Aragão"
                />
                <strong>Samba das antigas</strong>
                <p>Curta sua festa com samba da melhor qualidade.</p>
            </PlayList>
            <PlayList to="/playlists/1">
                <img
                    src="https://http2.mlstatic.com/jorge-arago-20-musicas-do-seculo-x-x-serie-millennium-D_NQ_NP_942611-MLB20583386384_022016-F.jpg"
                    alt="Jorge Aragão"
                />
                <strong>Samba das antigas</strong>
                <p>Curta sua festa com samba da melhor qualidade.</p>
            </PlayList>
        </List>
    </Container>
);

export default Browse;
