import {useState} from "react";
export default function Main(){

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState(0);
  const [listatelefonica, setlistatelefonica] = usesState([]);

  const registrar = (event) => {
    event.preventDefault();
    alert("tá lá");
    setlistatelefonica([...listatelefonica, {
      nomeSalvo: nome,
      telefoneSalvo: telefone
    }])
  };

  console.table(listatelefonica);

  return(

    <main>
      <form action="" onSubmit={registrar}>
      <label htmlFor= "nome">
        nome:</label>
        <input 
        type="text"
        name=""
        id=""
        
        onChange={(event) => setNome(event.target.value)}/>
        {nome}
      

      <br></br>
      <label htmlFor="telefone">telefone:</label>
      <input 
      type="tel"
      name=""
      id=""
     
      onChange={(event) => (event.target.value)}/>
      <button>salvar bebis</button>
      </form>
      {listatelefonica.map((gusang, index)=>
      <div key={index}>
        <p>{gusang.nomeSalvo}</p>
        </div>
    )}
    </main>


  )
}