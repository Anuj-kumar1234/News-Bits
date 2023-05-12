import React, {useEffect,useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import MyModal from './MyModal'
//import SignUp from './SignUp'
//import { ImageFill } from 'react-bootstrap-icons'


const News =(props)=>
{
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
  const[showModal,setShowModal]=useState(false);
  //const[styleU,setStyle]=useState({});

  //const[document,setDocument]=useState("");
  const capitalizeFirstLetter= (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
 }

  //Showing the Sign Up page 
   const callBack=()=>
  {
      setShowModal(true);
      console.log(showModal); 
  }
  //const closeButtonFunction =(element)=>
  //{
  //   //  console.log()
  //   // (element.style.opacity!==0) ? setStyle({}) :
  //    if(element.style.opacity!==0)
  //    {
  //      document.body.style.overflowY="scroll";
  //      setStyle({});
  //    }
  //}
  
  const updateNews= async (url)=>
  {
    //let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=027421b51751446989b7cbb69659c807&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data= await fetch(url);
    let parsedData= await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log("updateNews")
  }
  useEffect(()=>
  {
     document.title=  `${capitalizeFirstLetter(props.category)}-News Bits`;
     //console.log("useEffect");
     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=027421b51751446989b7cbb69659c807&page=${page}&pageSize=${props.pageSize}`;
     updateNews(url);
  },[props.category, props.country, props.pageSize,page])
  
  const fetchMoreData =  ()=>
  {
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=027421b51751446989b7cbb69659c807&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      //console.log("fetchMoreData");
      
  }


    return (
      <div>
         {showModal && <MyModal open={showModal} onClose={()=>{setShowModal(false)}}/>}
        <div className="container my-3 ">
         
            <h2 className="text-center">NewsBits- Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {loading && <Spinner />}
             <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>}
              >
             
               <div className="container">
                    <div className="row my-3">

                        {articles.map((element)=>
                          {
                            return   <div className="col-md-4" key={element.url}>
                                        <NewsItems title={element.title ? element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} source={element.source} handleCallBack={callBack}/>
                                      </div>  
                        })}

                  </div>
               </div>
            </InfiniteScroll>
        </div>
        </div>
    )
  
}
News.defaultPropTypes=
{
  country:'in',
  category:'general',
  pageSize:8,

}
News.propTypes=
{
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}
export default News
