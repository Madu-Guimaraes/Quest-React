// Importando o componente se ele estiver em um arquivo separado
import ColoredUppercaseText from './components/component';
import Button from './components/button/button'

function App() {
  return (
    <div>
      {/* Chamando o componente e passando as props de cor e estado do paragrafo */}
      <ColoredUppercaseText text="Meu cérebro é mais do que algo meramente mortal, e o tempo mostrará isso. - Ada Lovelace" color="blue" />
      <Button label="Baixar CV" />
      <Button label="Cancelar" />
      <Button />
    </div>
  );
}

export default App;