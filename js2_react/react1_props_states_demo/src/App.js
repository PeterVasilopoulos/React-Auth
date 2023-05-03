import CounterComponent from "./components/CounterComponent";
import StylingComponent from "./components/StylingComponent";
import VideoDetails from "./components/VideoDetails"
import VideoDetailsClass from "./components/VideoDetailsClass";

// parent --> child (props)


function App() {

  return (
    <div>
      <h1> Hello React</h1>
      <StylingComponent />
      <VideoDetails 
          title="Wednesday Frog" 
          views={200} 
          hashtags={["Wednesday", "Frog", "Loud"]} />

      <VideoDetails 
        title="Wednesday Addam" 
        views={500}
        hashtags={["Wednesday", "Creepy"]}/>

      <VideoDetails 
        title="It's Wedesnday, my dudes" 
        views={1000}
        hashtags={["Wednesday"]}/>


      <CounterComponent />
      <CounterComponent />
      <CounterComponent />

      <VideoDetailsClass    
        title="Wednesday Frog" 
          views={200} 
          hashtags={["Wednesday", "Frog", "Loud"]} />
      <VideoDetailsClass
        title="Wednesday Addam" 
        views={500}
        hashtags={["Wednesday", "Creepy"]}/>


      
    </div>
  );
}

export default App;
