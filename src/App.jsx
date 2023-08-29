import './App.css';
import Button from './components/Button';

function App() {
  function handleClickHead() {
    alert('saya tombol header');
  }

  function handleClickContent() {
    alert('saya tombol content');
  }

  const role = 'admin';

  return (
    <div>
      <section id="header">
        <Button
          label={'Button Header'}
          theme={'btn-outline-primary'}
          click={handleClickHead}
        />
      </section>
      {role !== 'marketing' && (
        <section id="content">
          <Button
            label={'Button Content'}
            theme={'btn-outline-success'}
            click={handleClickContent}
          />
        </section>
      )}
    </div>
  );
}

export default App;
