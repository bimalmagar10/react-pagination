import Card from "./components/Card";
import {useFetch} from "./useFetch";
import {useState,useEffect} from "react";
let count = 0;
function App() {
  const {loading,data} = useFetch();
  const [page,setPage] = useState(0);
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    if(loading) return;
    setPosts(data[page]);
  },[loading,page]);

  const handlePrev = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if(prevPage < 0){
        prevPage = data.length - 1;
      }
      return prevPage;
    })
  };

  const handleNext = () => {
    setPage((oldPage => {
      let nextPage = oldPage + 1;
      if(nextPage > data.length - 1){
        nextPage = 0;
      }
      return nextPage;
    }))
  }

  const handlePage = (index) => {
    setPage(index);
  }
  return (
    <div className="container">
      <h1 className="heading__primary">{loading ? "Loading......":"This is the pagination demo"}</h1>
      <div className="layout">
         {
          posts.map((post,i) => (
            <Card key={i} {...post}/>
          ))
         }
      </div>
      <div className="button-container">
         <button className="button-side" onClick={handlePrev}>
           Prev
         </button>
         {
            data.map((item,index) => {
              return (
                <button
                  key={index}
                  className={`button-paginate ${index === page ? 'active':null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>)
            })
        }
         <button className="button-side" onClick={handleNext}>
           Next
         </button>
      </div>
    </div>
  );
}

export default App;
