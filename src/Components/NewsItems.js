import React,{useState,useCallback} from 'react'
import * as Icon from 'react-bootstrap-icons';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//import SignUp from './SignUp';



const NewsItems= (props) =>
   {
     const[toggleheart,setToggleHeart]=useState(false);
     //const[showSignUp,setShowSignUp]=useState(false);

    let {title,description,imageUrl,url,publishedAt,source,handleCallBack}=props;
    const changeColor = useCallback(() =>{
      setToggleHeart(!toggleheart);
      props.handleCallBack(!toggleheart);

      (!toggleheart) ? toast.success("Added to saved News") :  toast.success("Removed  from saved News")

     },[toggleheart])

    return (
      <div>
            <div className="card">
            <img src={(!imageUrl)?"https://www.hindustantimes.com/ht-img/img/2023/03/13/1600x900/randhawa_in_rajasthan_on_modi_pulwama_1678714855071_1678714855325_1678714855325.jpg":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-body-secondary">By {source.name} on {new Date(publishedAt).toDateString()}</small></p>
                  <div className="d-flex justify-content-between">
                      <a href={url} target="-blank" className="btn btn-sm btn-primary">Go somewhere</a>
                      <Icon.Heart cursor="pointer" style={{color:toggleheart ? "red":"grey"}} onClick={changeColor}/>
                 </div>
              </div>
            </div>
            {/*showSignUp && <SignUp/>*/}
            
      </div>




    )
}

export default NewsItems
