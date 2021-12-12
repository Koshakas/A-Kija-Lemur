
import Hello from './Components/Start/Hello';

const element = <i>Hello,</i>;

const data = [
  {to: 'Europe', color: 'blue', size: '44px'},
  {to: 'America', color: 'red', size: '14px'},
  {to: 'Antarctica', color: 'green', size: '54px'}
]

function App() {


  return (
    <>
      <div className="App">

        <Hello element={element} to={'Madagascar'} color={'blue'} size={'15px'} />

        <Hello element={element} to={'Africa'} color={'yellow'} size={'25px'}/>

        <Hello element={element} to={6 * 9} color={'pink'} size={'35px'}/>
      
       

        {
          data.map((d, i) => { 
            console.log(d);
            return <Hello key={i} element={element} to={d.to} color={d.color} size={d.size}/> 
          }) 
          && console.log('labas')
        }
      
      
      </div>
    </>
  );
}

export default App;
