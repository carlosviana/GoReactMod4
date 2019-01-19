import React from "react";
import { Container, Header, Songlist } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
    <Container>
        <Header>
            <img
                src="https://http2.mlstatic.com/jorge-arago-20-musicas-do-seculo-x-x-serie-millennium-D_NQ_NP_942611-MLB20583386384_022016-F.jpg"
                alt="Playlist"
            />
            <div>
                <span>PLAYLIST</span>
                <h1>Samba do Aragão</h1>
                <p>18 músicas</p>

                <button>PLAY</button>
            </div>
        </Header>
        <Songlist cellPadding={0} cellSpacing={0}>
            <thead>
                <th />
                <th>Título</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th>
                    <img src={ClockIcon} alt="Duração" />
                </th>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>Papel de pão</td>
                    <td>Jorge Aragão</td>
                    <td>Millenium</td>
                    <td>3:45</td>
                </tr>
            </tbody>
        </Songlist>
    </Container>
);

export default Playlist;
