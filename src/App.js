
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BsLinkedin,BsGithub} from "react-icons/bs";


function App() {
return (
    <div className="introduction ">
 <h1 className="bg-primary rounded-pill">My name is Muhammad Shaheryar Salahuddin</h1>
 <h3>Intro:
I understand you'd like a brief self-introduction. However, your provided user profile doesn't contain any specific information about yourself. To create an introduction, please provide some key details about you, such as your name, occupation, interests, or any other information you'd like to include. Once you provide more information, I'd be happy to help you craft a short self-introduction.</h3>
<h4>Iam currently enrolled in 6 semester in iqra</h4>
<h5>My Hobbies:</h5>
<h2 className='cricket'>1:Cricket </h2>
<h2 className='cricket'>2:football</h2>
<a href='https:www.linkedin.com/in/
Muhammad-Shaheryar-311789273' className ="linkdin">
  <BsLinkedin/>
<b>linkedin</b>
</a>
<a href="https://github.com/ShariShah1234"className ="github">
  <BsGithub/>
<b>github</b>
</a>

</div>

  );
}

export default App;
