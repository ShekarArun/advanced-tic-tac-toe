import Player from "./components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={'Pl1'} symbol={'X'} />
          <Player name={'Pl2'} symbol={'O'} />
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
