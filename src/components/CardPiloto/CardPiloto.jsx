import "./CardPiloto.css";

export default function CardPiloto({ posicao, nome, foto, equipe, cor, pontos, melhorTempo, largada }){
    return (
        <>
            <div className="piloto-container">
                <img src={ foto } alt={ nome } />
                <div className="equipe-container" style={{ backgroundColor: cor }}>
                    <p>{ equipe }</p>
                </div>

                <div className="id-container">
                    <h1> { posicao } </h1>
                    <h1> { nome } </h1>
                </div>

                <div className="info-container">
                    <div className="pontos-container">
                        <p> { pontos } </p>
                        <p>Pontos</p>
                    </div>
                    <div className="tempo-container">
                        <p> { melhorTempo } </p>
                        <p>Melhor Tempo</p>
                    </div>
                    <div className="largada-container">
                        <p> { largada } </p>
                        <p>Largada</p>
                    </div>
                </div>
            </div>
        </>
    );
}