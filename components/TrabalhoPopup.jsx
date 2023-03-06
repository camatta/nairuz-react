import Image from 'next/image';

function TrabalhoPopup({isActive, onShow, activeIndex, popupInfo}){
    return(
        <>
            {isActive? (
                <div className="modal-overlay-projetos">
                <div className="secondary-overlay-projetos">
                    <div className="container projetos-popup" id="projetos-popup">
                            <button id="close" onClick={()=> activeIndex(null)}>X</button>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="image-top">
                                    <Image className="img-fluid" src={`/projetos/${popupInfo.images}/${popupInfo.images}-banner.png`} alt="foto" width={676} height={182} />
                                </div>

                                <div className="history">
                                    <p className="title">A <span>História</span></p>
                                    <p>{popupInfo.description}</p>
                                </div>
                                <div className="bottom">
                                        <div className="organizadores">
                                            <p className="title">Os <span>Organizadores</span></p>
                                            <ul>
                                                {popupInfo.organizers.map((e, i) => {
                                                    return(
                                                        <li key={i}><p className="nome">{e.name}</p> <p className="cargo">{e.job}</p></li>
                                                    )
                                                })}
                                                {/* <li><p className="nome">Thaiane Pinha</p> <p className="cargo">REDATORA</p></li> */}
                                            </ul>
                                        </div>
                                        <div className="release">
                                            <p className="title">Ano de <span>Lançamento</span></p>
                                            <p>{popupInfo.release}</p>
                                            <button onClick={()=> activeIndex(null)}>Conhecer outros projetos</button>
                                        </div>
                                    </div>
                            </div>

                            <div className="col-lg-5">
                                <p className="title">A <span>História</span></p>
                                <div className="images">
                                    <Image className="img-fluid" src={`/projetos/${popupInfo.images}/1.png`} alt="foto" width={190} height={250} />
                                    <Image className="img-fluid" src={`/projetos/${popupInfo.images}/2.png`} alt="foto" width={249} height={250} />
                                    <Image className="img-fluid" src={`/projetos/${popupInfo.images}/3.png`} alt="foto" width={249} height={250} />
                                    <Image className="img-fluid" src={`/projetos/${popupInfo.images}/4.png`} alt="foto" width={190} height={250} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : 
                (<button onClick={onShow}>Saiba mais</button>)
            }
        </>
        
    )
};

export default TrabalhoPopup;