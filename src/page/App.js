import React from 'react';
import vagas from '../assets/vagas.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function App() {
  return (

    <div className="container-fluid container">
      <div className="wrapper">
        <div className="d-flex flex-col mt-5 mb-5 m-md-5">

          {/* SECTION DA ESQUERDA */}
          <section className="wrapper-text m-0 mt-md-3 mb-md-4">
            <h1 className="main-title mb-4 mb-md-5">VAGAS</h1>
            <h2 className="title mt-4 mr-3 mr-lg-5 mb-md-5">CONSULTOR DE NEGÓCIOS - VENDAS PUBLICIDADE</h2>
            <h3 className="subtitle mt-4 mt-lg-5">Requisitos</h3>
            <p>
              Graduação em Marketing ou Publicidade e Propaganda.
              Experiência com Vendas. Conhecimentos de gestão de indicadores, negociação e informática.
            </p>
            <h3 className="subtitle mt-3 mt-lg-5">Atividades</h3>
            <p>
              Planejamnto de vendas , visita a clientes, desenvovimento
              de propostas comerciais e plano de mídias, acompanhamento de indicadores e elaboração de orçamentos.
            </p>
            <h3 className="subtitle mt-3 mt-lg-5">Perfil do candidato</h3>
            <p>
              Comunicativo, negociador, ágil e responsável.
            </p>

            <h3 className="subtitle mt-3 mt-lg-5">Horário de trabalho</h3>
            <p>
              8 - 18h
            </p>

            <div className="set-margin">
              {/* FORMULÁRIO */}
              <div className="wrapper-form p-4 mr-0 mr-md-3 mr-md-5 mt-md-5">
                <div className="content-form p-3 content-fluid d-flex flex-column">
                  <form>
                    <p className="title-form">Envie seu currículo</p>
                    <label className="mb-0">
                      Nome:
                    </label>
                    <input className="mb-3 m-0 w-100" type="text" name="name" />
                    <label className="mb-0">
                      E-mail:
                    </label>
                    <input className="mb-3 m-0 w-100" type="email" name="email" />
                    <label className="mb-0">
                      CEP:
                    </label>
                    <input className="mb-3 m-0 w-100" type="text" name="cep" />
                    <label className="mb-0">
                      Endereço:
                    </label>
                    <input className="mb-3 m-0 w-100" type="text" name="endereco" />

                    <div className="d-flex flex-column flex-md-row">
                      <div className="w-100 w-md-50 mr-0 mr-md-4">
                        <label className="mb-0">
                          Número:
                        </label>
                        <input className="mb-3 m-0 w-100" type="text" name="cep" />
                      </div>
                      
                      <div className="w-100 w-md-50">
                        <label className="mb-0">
                          Bairro:
                        </label>
                        <input className="mb-3 m-0 w-100" type="text" name="cep" />
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                      <div className="w-100 w-md-50 mr-0 mr-md-4">
                        <label className="mb-0">
                          Cidade:
                        </label>
                        <input className="mb-3 m-0 w-100" type="text" name="cep" />
                      </div>
                      
                      <div className="w-100 w-md-50 mb-3 mb-md-0">
                        <label className="mb-0">
                          Estado:
                        </label>
                        <input className="mb-3 m-0 w-100" type="text" name="cep" />
                      </div>
                    </div>

                    

                    {/* ANEXAR CURRÌCULO */}
                    <spam className="mt-3 mt-md-4 title-btn">CURRÍCULO</spam>
                    <div className="d-flex flex-column flex-md-row mb-4">
                      <div className="d-flex flex-column wrapper-button">
                        <button className="btn btn-all btn-cv mt-2">Anexar currículo</button>
                      </div>
                      <div className="mt-3 mt-md-0 ml-md-4 text-cv d-flex flex-column">
                        <spam>Todos os campos são obrigatórios</spam>
                        <spam>Tamanho máximo para upload - 10mb</spam>
                        <spam>Tipo do arrquivo .pdf ou .doc</spam>
                      </div>
                    </div>
                    {/* /ANEXAR CURRÌCULO */}

                  </form>
                </div>
                {/* /FORMULÀRIO */}
                {/* BOTÃO PARA ENVIAR CURRÌCULO */}
                <div className="d-flex justify-content-center justify-content-md-end p-2 mt-md-2">
                  <button className="btn btn-all btn-send mt-4 mb-2">Enviar currículo</button>
                </div>
                {/* /BOTÃO PARA ENVIAR CURRÌCULO */}
              </div>

            </div>

          </section>
          {/* /SECTION DA ESQUERDA */}

          {/* SECTION DA DIREITA */}
          <section className="wrapper-color m-0 mt-md-3 mb-md-4">
            <div className="wrapper-img mt-4">
              <img className="img-vagas" src={vagas} alt="vagas" />
            </div>
          </section>
          {/* /SECTION DA DIREITA */}


        </div>
      </div>
    </div>
  );
}

export default App;
