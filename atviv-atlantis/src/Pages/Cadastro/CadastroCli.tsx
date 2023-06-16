import React from 'react';
import './cadastro.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/NavBar';

const CadastroCli: React.FC = () => {

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
    const [selectedOption, setSelectedOption] = useState('Cpf');
    const [selectedOption2, setSelectedOption2] = useState('Solteiro Simples');
    const [inputValue, setInputValue] = useState('');
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [numeroDoc, setNumeroDoc] = useState("")
    const [userAcomodacao,setUserAcomodacao]= useState("Solteiro Simples")
      

    function handleChange(event: any ) {
        const value = event.target.value;
        setInputValue(value);
        console.log(value);
    }

    function handleChangeOption(event: any) {
        setSelectedOption(event.target.value);
        setUserDocumento(event.target.value);
    }

    function handleChangeOption2(event: any) {
        setSelectedOption2(event.target.value);
        setUserAcomodacao(event.target.value);
    }
        
    function formatDate(dateString:string) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)+1));
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return formattedDate;
    }

    const Cadastrar = () => {
        
        const userCadastrado = {
        nome: userNome,
        nomeSo: userNomeSocial,
        dataN: userDataN,
        telefone:userTelefone,
        acomodacao:userAcomodacao,
        endereco:{
            rua: userRua,
            bairro: userBairro,
            cidade: userCidade,
            estado:userEstado,
            pais:userPais,
            codigoPostal:userCodigoPostal
        },
        documento:{
            tipo:userdocumento,
            numero:numeroDoc
        }
        }
        if (!userCadastrado.nome || !userCadastrado.nomeSo || !userCadastrado.dataN || !userCadastrado.telefone || !userCadastrado.acomodacao || !userCadastrado.endereco || !userCadastrado.documento){
            alert("Um dos itens não foi inserido")
        }
    console.log(userCadastrado);

    }  

      
    return (
        <>      
        <Navbar/>
        <div className='RenderBackBlur'></div>
            <div className="Listbox">
                <h1 className='alignCenter'> Cadastro</h1>
                <div className='input-container'>
                    
                    <div className='space-around'>
                            <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserNome(e.target.value)} placeholder="Nome:"/>
                            <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setuserNomeSocial(e.target.value)} placeholder="Nome Social:" />
                    </div>

                </div>

                <div className='input-container'>
                    <div className='space-around'>
                    <div className="date-input-container">
                    <input
                        type="date"
                        id="dateInput"
                        value={userDataN}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserDataN(e.target.value)}
                        required
                    />
                    <span className={`placeholder ${userDataN ? 'selected' : ''}`}>
                        {userDataN ? formatDate(userDataN) : 'Insira a data de nascimento:'}
                    </span>
                    </div>

                        <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserTelefone(e.target.value)} placeholder="Telefone:" />
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

                <h3 className='alignCenter'>Documento</h3>
                <div className='documento'>
                    <select value={selectedOption} onChange={handleChangeOption}>
                        <option value="Cpf">Pessoa Física</option>
                        <option value="Rg">Registro Geral</option>
                        <option value="Passaporte">Passaporte</option>
                    </select>
                    <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNumeroDoc(e.target.value)} placeholder="Número do documento"/>

                </div>
                    

                <div> 
                    <h3 className='alignCenter'>Endereço</h3>

                        <div className='space-around'>
                            <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserRua(e.target.value)} placeholder="Rua:"/>
                            <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserBairro(e.target.value)} placeholder="Bairro:"/>
                            <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserCidade(e.target.value)} placeholder="Cidade:"/>
                        </div>
                    </div>



                    <div className='space-around'>
                        <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserEstado(e.target.value)} placeholder="Estado:"/>
                        <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserPais(e.target.value)} placeholder="Pais:"/>
                        <input type="text" required onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserCodigoPostal(e.target.value)} placeholder="Codigo postal"/>
                    </div>



                <p className='alignCenter'><Link to="/ListagemCli"><button className="custom-button" onClick={Cadastrar}><a>Cadastrar</a></button></Link></p> 
                
            </div>
            
        </>
    );
}

export default CadastroCli;