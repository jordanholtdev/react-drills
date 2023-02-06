import Form from './components/Form';
import './App.css';

function App() {
    const onTodoSubmit = (draft: string) => {
        console.log('draft submitted', draft);
    };
    return (
        <div className="App">
            <h1>To Do App</h1>
            <Form onSubmit={onTodoSubmit} />
        </div>
    );
}

export default App;
