import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Dashboard from './components/dashboard.js'
import SockJsClient  from 'react-stomp';
import { SOCKET_URL} from './assets/constant'
import Swal from 'sweetalert2'

const engine = new Styletron();
function App() {
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: true,
    timer: 10000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  const alertFinishedSession = (name, sim, nao) => {
    Toast.fire({
      icon: 'success',
      title: 'A pauta '+ name + ' foi encerrada com ' + sim + ' votos SIM e ' + nao + ' votos NÃO'
    })
  }


  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
      <SockJsClient
            url={SOCKET_URL}
            topics={['/topic/group']}
            onConnect={console.log("Disconnected!")}
            onDisconnect={console.log("Disconnected!")}
            onMessage={msg => alertFinishedSession(msg.voteCountingName, msg.sim, msg.nao)}
            debug={false}
        />
        <Dashboard />
      </BaseProvider>
    </StyletronProvider>
  );
}
export default App;