export const fetchBannerDetails=()=> {
    return(dispatch)=>{
        fetch("http://localhost:3001/banner")
        .then(res => res.json())
        .then(data => {
            dispatch({type:"BANNER",payload:data})
        })
    }
    
  }

  export const fetchCategoriesDetails=()=> {
    return(dispatch)=>{
        fetch("http://localhost:3001/catagory")
        .then(res => res.json())
        .then(data => {
            data && data.sort((a, b) => (a.order > b.order) ? 1 : -1);
            dispatch({type:"CATEGORIES",payload:data})
        })
    }
    
  }