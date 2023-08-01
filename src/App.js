import Shell from '@facts-kit/renderer';
import './App.css';

const PBJ = ({ data }) => {
  return (
    <>
      <p>Peanut Butter: {data?.peanutbutter}</p>
      <p>Jelly: {data?.jelly}</p>
      <p>Bread: {data?.bread}</p>
    </>
  );
};
function App() {
  return (
    <div className="App">
      Blah
      <Shell tx="xTqt_wZlmkw3iz5t_05Ll1bTXs1BSpK6MFghXo-Fdao" child={<PBJ />} />
    </div>
  );
}

export default App;
