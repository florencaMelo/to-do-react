import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./styles";

export function Home () {
  return(
    <HomeContainer>
      <form onSubmit={handleCreateNewCycle()}>
        <FormContainer>
          <label>Vou trabalhar em</label>
          <TaskInput 
            type="text" 
            list="task-suggestions" 
            placeholder="Dê um nome para seu projeto"
          />
          <datalist>
            <option value="Projeto 1"/.>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
            <option value="Projeto 4."/>
          </datalist>
          
          <label>Durante</label>
          <MinutesAmountInput placeholder="00"></MinutesAmountInput>
        </FormContainer>  
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>     
        </CountdownContainer>
        <button type="submit">Começar</button>
      </form>
    </HomeContainer>
  )
}