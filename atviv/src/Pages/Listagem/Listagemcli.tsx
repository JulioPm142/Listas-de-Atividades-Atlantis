import React from "react";
import "./Listagem.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import edit from "../../img/icons/edit.svg";
import addDep from "../../img/icons/addDepen.svg";
import deleteIcon from "../../img/icons/delete.svg"
import Modal from '../../Components/modalCliente/modal';
import back from "../../img/icons/BackBt.svg";
import next from "../../img/icons/NextBt.svg";
import mag from "../../img/icons/mag.svg"
import { useEffect } from 'react';
import { parse } from "path";
import Navbar from '../../Components/Navbar/NavBar'

const ListagemCli: React.FC = () => {
  const [userNome, setUserNome] = useState("")
  const [userNomeSocial, setuserNomeSocial] = useState("")
  const [userDataN, setUserDataN] = useState("")
  const [userRua, setUserRua] = useState("")
  const [userBairro, setUserBairro] = useState("")
  const [userCidade, setUserCidade] = useState("")
  const [userEstado, setUserEstado] = useState("")
  const [userPais, setUserPais] = useState("")
  const [userCodigoPostal,setUserCodigoPostal]=useState("")
  const [userTelefone,setUserTelefone]= useState("")
  const [userdocumento,setUserDocumento] = useState("")
  const [numeroDoc,setNumeroDoc]=useState("")
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [Pesquisa, setPesquisa] = useState("")
  const [page, setPage] = useState(0);
  const [maxPages, setmaxPages] = useState(0);
  const [lastclicked, setLastclicked] = useState('');
  const [unicoCliente,setUnicoCliente] = useState([])
  const [selectedOption2,setSelectedOption2] = useState('')
  const [userAcomodacao,setUserAcomodacao] = useState('')



  function handleChange(event: any) {
    const value = event.target.value;
    setInputValue(value);
    console.log(value);
  }

  function handleChangeOption(event: any) {
    setSelectedOption(event.target.value);
    setUserDocumento(event.target.value);
  }

  function formatDate(dateString: string) {
    const [year, month, day] = dateString.split("-");
    const date = new Date(
      Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day) + 1)
    );
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  }

const handleOpenModal = () => {
  setIsModalOpen(true);
    
};

//MODAL MODAL E MAIS MODAL 🤡

const handleCloseModal = () => {
  setIsModalOpen(false);
};

const handleOpenModal2 = () => {
  setIsModalOpen2(true);
  
};

const handleCloseModal2 = () => {
setIsModalOpen2(false);
};


const handleOpenModal3 = () => {
  setIsModalOpen3(true);
  
};

const handleCloseModal3 = () => {
setIsModalOpen3(false);
};

const handleOpenModal4 = () => {
  setIsModalOpen4(true);
  
};

const handleCloseModal4 = () => {
setIsModalOpen4(false);
};

// Sem mais Modal 🙏

const cadastrar=()=>{
  handleCloseModal()
}

const resetPage = () => {
  setPage(0)
}
var ITEMS_PER_PAGE = 4
const startIndex = page * ITEMS_PER_PAGE;
const endIndex = startIndex + ITEMS_PER_PAGE;

function handleChangeOption2(event: any) {
  setSelectedOption2(event.target.value);
  setUserAcomodacao(event.target.value);
}


let counter = 0;


const handleNextPageClick = () => {
  if (page >= (userCadastrado.length/4-1) ) {
      alert("Não há mais clientes!")
    }
  else{
      setPage(page + 1);      
  }
  
};

const handlePrevPageClick = () => {
  if (page > 0) {
      setPage(page - 1);
    }
  else{
      alert("A página já está no começo")
  }
  
};


  const userCadastrado = [
    {
      id: 1,
      nome: 'Hannah Jenkins',
      tipodoc: 'Passport',
      numeroDoc: '123456789',
      acomodacao: 'Solteiro Mais',
      dependente:[
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Cpf',depdocumentoN:"56143"}
      ]
    },
    {
      id: 2,
      nome: 'Holly Hughes',
      tipodoc: 'Drivers License',
      numeroDoc: '987654321',
      acomodacao: 'Familia Mais',
      dependente:[
        {depNome:'Dependente 1',depIdade:'68',depdocumento:'Rg',depdocumentoN:"123456"},
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },
    {
      id: 3,
      nome: 'Mane Smith',
      tipodoc: 'CPF',
      numeroDoc: '987654321',
      acomodacao: 'Familia Mais',
      dependente:[
        {depNome:'Dependente 1',depIdade:'68',depdocumento:'Rg',depdocumentoN:"123456"},
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },
    {
      id: 4,
      nome: 'Crane Smith',
      tipodoc: 'CNH',
      numeroDoc: '987654321',
      acomodacao: 'Familia Mais',
      dependente:[
        {depNome:'Dependente 1',depIdade:'68',depdocumento:'Rg',depdocumentoN:"123456"},
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },    {
      id: 1,
      nome: 'John Doe',
      tipodoc: 'Alguma coisa?',
      numeroDoc: '123456789',
      acomodacao: 'Solteiro Mais',
      dependente:[
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },
    {
      id: 2,
      nome: 'Sophie Torres ',
      tipodoc: 'Drivers License',
      numeroDoc: '987654321',
      acomodacao: 'Familia Mais',
      dependente:[
        {depNome:'Dependente 1',depIdade:'68',depdocumento:'Rg',depdocumentoN:"123456"},
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },
    {
      id: 3,
      nome: 'Mane Smith',
      tipodoc: 'CPF',
      numeroDoc: '987654321',
      acomodacao: 'Familia Mais',
      dependente:[
        {depNome:'Dependente 1',depIdade:'68',depdocumento:'Rg',depdocumentoN:"123456"},
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },
    {
      id: 4,
      nome: 'Charlotte Brown',
      tipodoc: 'RG',
      numeroDoc: '987654321',
      acomodacao: 'Familia Mais',
      dependente:[
        {depNome:'Dependente 1',depIdade:'68',depdocumento:'Rg',depdocumentoN:"123456"},
        {depNome:'Dependente 2',depIdade:'8',depdocumento:'Rg',depdocumentoN:"56143"}
      ]
    },
  ];
  
useEffect(() => {
    if(userCadastrado.length<=ITEMS_PER_PAGE) {
      var maxPage= 1
      console.log('1')
    }

    else if(userCadastrado.length%ITEMS_PER_PAGE==0 ){
      var maxPage= parseInt(((userCadastrado.length/ITEMS_PER_PAGE)).toFixed(0))
      console.log('2')
    }
    
    else{
      var maxPage= parseInt(((userCadastrado.length/ITEMS_PER_PAGE)+1).toFixed(0))
      console.log('3')
      
    }
    setmaxPages(maxPage)
  
})


const modal1 = (

  <>
  <h1 className='alignCenter'> Cadastrar dependente</h1>
                <div className="modal-bg"></div>
                <div className='input-container'>
                    
                    <div className='space-around'>
                            <input type="text" required onChange={(e) => setUserNome(e.target.value)} placeholder="Nome:"/>
                            <input type="text" required onChange={(e) => setuserNomeSocial(e.target.value)} placeholder="Nome Social:" />
                    </div>

                </div>

                <div className='input-container'>
                    <div className='space-around'>
                    <div className="date-input-container">
                    <input
                        type="date"
                        id="dateInput"
                        value={userDataN}
                        onChange={(e) => setUserDataN(e.target.value)}
                        required
                    />
                    <span className={`placeholder ${userDataN ? 'selected' : ''}`}>
                        {userDataN ? formatDate(userDataN) : 'Insira a data de nascimento:'}
                    </span>
                    </div>

                        <input type="text" required onChange={(e) => setUserTelefone(e.target.value)} placeholder="Telefone:" />
                    </div>
                </div>


                <h2 className="space-around">Documento</h2>



                <div className='space-around documento'>
                    <select value={selectedOption} onChange={handleChangeOption}>
                        <option value="Cpf">Pessoa Física</option>
                        <option value="Rg">Registro Geral</option>
                        <option value="Passaporte">Passaporte</option>
                    </select>
                    
                </div>

                <div className='space-around documento'>
                  <input type="text" required onChange={(e) => setNumeroDoc(e.target.value)} placeholder="Número do documento"/>
                </div>


                <a className='space-around'>
                  <button className="custom-button" onClick={handleCloseModal}><a>Cancelar</a></button>
                  <button className="custom-button" onClick={cadastrar}><a>Cadastrar</a></button>
                </a>

  </>
  )

  const modal2 = (
    <><h1 className="arruma">Listagem de dependentes</h1>
               <div className="arruma">
                
                    { <tbody>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Tipo documento</th>
                                <th>numero documento</th>
                            </tr>
                        </thead>    
                                    
                        {unicoCliente.map((item: {depNome:string,depIdade:string,depdocumentoN:string,depdocumento:string }, id: number) => {
                            return (
                                <tr key={id}> 
                                    <td>{item.depNome}</td>
                                    <td>{item.depIdade}</td>
                                    <td>{item.depdocumento}</td>
                                    <td>{item.depdocumentoN}</td>
                                    <td className="space-around">
                                      <img src={edit} className="list-button" onClick={handleOpenModal4} title="Editar Dependente"/>                                
                                    </td>                                     
                                </tr>
                                )   
                        })}                         
                    </tbody> } 
               </div>

               <h1 className="space-around"></h1>
      
    </>
  )

  const modal3 =(
  <>
    <h1 className='alignCenter'> Editar Usuário</h1>
    <div className='input-container'>
        
        <div className='space-around'>
                <input type="text" required onChange={(e) => setUserNome(e.target.value)} placeholder="Nome:"/>
                <input type="text" required onChange={(e) => setuserNomeSocial(e.target.value)} placeholder="Nome Social:" />
        </div>

    </div>

    <div className='input-container'>
        <div className='space-around'>
        <div className="date-input-container">
        <input
            type="date"
            id="dateInput"
            value={userDataN}
            onChange={(e) => setUserDataN(e.target.value)}
            required
        />
        <span className={`placeholder ${userDataN ? 'selected' : ''}`}>
            {userDataN ? formatDate(userDataN) : 'Insira a data de nascimento:'}
        </span>
        </div>

            <input type="text" required onChange={(e) => setUserTelefone(e.target.value)} placeholder="Telefone:" />
        </div>
    </div>

    <h3 className='alignCenter'>Acomodação</h3>
                <div className='input-container'>
                    <div className='documento'>
                        <select value={selectedOption2} onChange={handleChangeOption2}>
                            <option value="SolteiroS">Solteiro Simples</option>
                            <option value="SolteiroM">Solteiro Mais</option>
                            <option value="CasalS">Casal Simples</option>
                            <option value="FamíliaSimp">Família Simples</option>
                            <option value="FamíliaM">Família Mais</option>
                            <option value="FamíliaS">Família Super</option>
                        </select>
                    </div>
                </div>
        
    <div className='input-container'>
      <div> 
        <h2 className='alignCenter'>Endereço</h2>
            <div className='space-around'>
                <input type="text" required onChange={(e) => setUserRua(e.target.value)} placeholder="Rua:"/>
                <input type="text" required onChange={(e) => setUserBairro(e.target.value)} placeholder="Bairro:"/>
                <input type="text" required onChange={(e) => setUserCidade(e.target.value)} placeholder="Cidade:"/>
            </div>
        </div>
    </div>

    <div className='input-container'>
        <div className='space-around'>
            <input type="text" required onChange={(e) => setUserEstado(e.target.value)} placeholder="Estado:"/>
            <input type="text" required onChange={(e) => setUserPais(e.target.value)} placeholder="Pais:"/>
            <input type="text" required onChange={(e) => setUserCodigoPostal(e.target.value)} placeholder="Codigo postal"/>
        </div>
    </div>



    <div className='space-around documento'>
        <select value={selectedOption} onChange={handleChangeOption}>
            <option value="Cpf">Pessoa Física</option>
            <option value="Rg">Registro Geral</option>
            <option value="Passaporte">Passaporte</option>
        </select>
        <input type="text" required onChange={(e) => setNumeroDoc(e.target.value)} placeholder="Número do documento"/>
    </div>

   


    <p className='alignCenter'><button className="custom-button" onClick={handleCloseModal3}><a>Salvar</a></button> </p> 
    <p className='alignCenter' style={{ color: '#ff0' }}>  dados em branco não serão modificados !</p>
    
</>

  )
  
  const modal4=(
  <>
    <h1 className='alignCenter'> Editar dependente</h1>
                <div className="modal-bg"></div>
                <div className='input-container'>
                    
                    <div className='space-around'>
                            <input type="text" required onChange={(e) => setUserNome(e.target.value)} placeholder="Nome:"/>
                            <input type="text" required onChange={(e) => setuserNomeSocial(e.target.value)} placeholder="Nome Social:" />
                    </div>

                </div>

                <div className='input-container'>
                    <div className='space-around'>
                    <div className="date-input-container">
                    <input
                        type="date"
                        id="dateInput"
                        value={userDataN}
                        onChange={(e) => setUserDataN(e.target.value)}
                        required
                    />
                    <span className={`placeholder ${userDataN ? 'selected' : ''}`}>
                        {userDataN ? formatDate(userDataN) : 'Insira a data de nascimento:'}
                    </span>
                    </div>

                        <input type="text" required onChange={(e) => setUserTelefone(e.target.value)} placeholder="Telefone:" />
                    </div>
                </div>


                <h2 className="space-around">Documento</h2>



                <div className='space-around documento'>
                    <select value={selectedOption} onChange={handleChangeOption}>
                        <option value="Cpf">Pessoa Física</option>
                        <option value="Rg">Registro Geral</option>
                        <option value="Passaporte">Passaporte</option>
                    </select>
                    
                </div>

                <div className='space-around documento'>
                  <input type="text" required onChange={(e) => setNumeroDoc(e.target.value)} placeholder="Número do documento"/>
                </div>


                <a className='space-around'>
                  <button className="custom-button" onClick={cadastrar}><a>Salvar</a></button>
                </a>
                <p className='alignCenter' style={{ color: '#ff0' }}>  dados em branco não serão modificados !</p>
  </>
  )
  return (
    
    <>  
    <Navbar/>
    
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>   
        {modal1}
    </Modal>

    <Modal isOpen={isModalOpen2} onClose={handleCloseModal2}>
       {modal2}
    </Modal>   

    <Modal isOpen={isModalOpen3} onClose={handleCloseModal3}>   
        {modal3}
    </Modal>     

    <Modal isOpen={isModalOpen4} onClose={handleCloseModal4}>   
        {modal4}
    </Modal>  

      <div className='RenderBackBlur2'></div>
        <div className="Listbox2">
        <h1 className="alignCenter"> Listagem</h1>
            <div className='mybg'>
                <div className="inputBox2">
                    <input type="text" placeholder='⌕ Pesquisar: ' onChange={(e) => {{ setPesquisa(e.target.value); resetPage() } }} />
                </div>

                <div className="boxSelect">
                    { <tbody>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo Documento</th>
                                <th>Número do Documento</th>
                                <th>Acomodação</th>
                                <th>Número de Depentes</th>

                            </tr>
                        </thead>    
                                    
                        {userCadastrado.filter((item: { nome: string; }) => {
                            if (Pesquisa === "") {
                                return item
                            }
                            else if (item.nome.toLocaleLowerCase().includes(Pesquisa.toLocaleLowerCase())) {
                                return item
                            }
                        }).slice(startIndex, endIndex).map((item: {id:number, nome:string,tipodoc:string,numeroDoc:string,acomodacao:string,dependente:any }, id: number) => {
                            return (
                                <tr key={id}> 
                                    <td>{item.nome}</td>
                                    <td>{item.tipodoc}</td>
                                    <td>{item.numeroDoc}</td>
                                    <td>{item.acomodacao}</td>
                                    <td> {(item.dependente).length}</td>
                                    <td className="space-around">
                                      <img src={addDep} className="list-button" onClick={() => {handleOpenModal();}} title="Cadastrar dependente"/> 
                                      <img src={mag} className="list-button" onClick={() => {handleOpenModal2(); setUnicoCliente(item.dependente)}} title="Listar dados"/>
                                      <img src={edit} className="list-button" onClick={() => {handleOpenModal3(); }}title="Editar cliente"/>
                                      <img src={deleteIcon} className="list-button" title="Deletar cliente"/>                                     
                                    </td>
                                      
                                </tr>
                                )   
                        })}     
                                <div className='pageButtom'>
                                    <div className='arruma'>
                                        <a className='button-1' onClick={handlePrevPageClick}> <img src={back} alt="botão de edição" /></a>
                                        <h2>{page+1}/{maxPages}</h2>
                                        <a className='button-1' onClick={handleNextPageClick}> <img src={next} alt="botão de edição"   /></a>
                                    </div>
                                </div>                        
                    </tbody> } 
                </div>
                
            </div>
        </div>
    </>
  );
};


export default ListagemCli;
