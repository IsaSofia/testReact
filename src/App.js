import React from 'react';
import './App.css';
import vagas from './assets/vagas.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function App() {
  return (
    
    <div className="container-fluid">
      <div className="wrapper">
        <div className="d-flex flex-col mt-5 mb-5 m-md-5">

          
          {/* SECTION DA ESQUERDA */}
          <section className="wrapper-text">     
            <h1 className="main-title mb-5">VAGAS</h1>
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
              <div className="wrapper-form p-2 mr-3 mr-md-5 mt-md-5">
                <div className="content-form p-3 content-fluid d-flex flex-column">
                  <form>
                    <p className="title-form">Envie seu currículo</p>
                    <label className="mb-0">
                      Nome:
                    </label>
                    <input className="mb-2 m-0 w-100" type="text" name="name"/>
                    <label className="mb-0">
                      E-mail:
                    </label>
                    <input className="mb-2 m-0 w-100" type="email" name="email"/>
                    <label className="mb-0">
                      CEP:
                    </label>
                    <input className="mb-2 m-0 w-100" type="text" name="cep"/>
                    <label className="mb-0">
                      Endereço:
                    </label>
                    <input className="mb-2 m-0 w-100" type="text" name="endereco"/>

          
                    {/* PRIMEIRA LINHA COM OS INPUTS LADO A LADO */}
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-column w-50">
                        <label>
                          Número:
                        </label>
                        <input className="mb-2 m-0" type="text" name="numero"/>
                      </div>
                      <div className="d-flex flex-column w-50 pl-4">
                        <label>
                          Bairro:
                        </label>
                        <input className="mb-2 m-0" type="text" name="bairro"/>
                      </div>
                    </div>
                    {/* /PRIMEIRA LINHA COM OS INPUTS */}

                    {/* SEGUNDA LINHA COM OS INPUTS */}
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-column w-50">
                        <label>
                          Cidade:
                        </label>
                        <input className="mb-2 m-0" type="text" name="ciidade"/>
                      </div>
                      <div className="d-flex flex-column w-50 pl-4">
                        <label>
                          Estado:
                        </label>
                        <input className="mb-2 m-0" type="text" name="estado"/>
                      </div>
                    </div>
                    {/* /SEGUNDA LINHA COM OS INPUTS */}

                    {/* ANEXAR CURRÌCULO */}
                    <spam className="mt-3 mt-md-5 title-btn">CURRÍCULO</spam>
                    <div className="d-flex flex-column flex-md-row mb-4">
                      <div className="d-flex flex-column">
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
                <button className="btn btn-all btn-send mt-4 mb-3">Enviar currículo</button>
              </div>
              {/* /BOTÃO PARA ENVIAR CURRÌCULO */}
              </div>
              
            </div>            

          </section>
          {/* /SECTION DA ESQUERDA */}

          {/* SECTION DA DIREITA */}
          <section className="wrapper-color">
            <div className="wrapper-img mt-4">
              <img className="img-fluid" src={vagas} alt="vagas" />
            </div>
          </section>
          {/* /SECTION DA DIREITA */}
        
          
        </div>
      </div>
    </div>
  );
}

export default App;
