import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';

const TopicList = (props: any) => {
    console.log(props);
    return (
        <div>
            <h1>TopicList</h1>
        </div>
    )
};

const TopicDetail = (props: any) => {
    console.log(props);
    return (
        <div>
            <h1>TopicDetailPage: {props.match.params.topicId}</h1>
        </div>
    )
};

function App() {
    return (
        <div className="App">
            <Route exact path='/' component={HomePage}/>
            <Route path='/topics' component={TopicList}/>
            <Route path='/topics/:topicId' component={TopicDetail}/>
        </div>
    );
}

export default App;
