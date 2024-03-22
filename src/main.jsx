import {useState} from "react";
export default function main(){
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState(0);
  const [listatelefonica, setlistatelefonica] = usesState([]);
  const resgistrar = (event) => {
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
        nome:
        <input 
        type="text"
        name=""
        id=""
        value={nome}
        onChange={(event) => setNome(event.target.value)}/>
        {name}
      </label>
      <br></br>
      telefone:
      <input 
      type="tel"
      name=""
      id=""
      value={telefone}
      onChange={(event) => (event.target.value)}/>
      <button>salvar bebis</button>
      </form>
    </main>


  )
}