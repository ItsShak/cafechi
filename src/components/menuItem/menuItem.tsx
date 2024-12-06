import "./style.css";

function MenuItem(attrs:{ foodName:string,foodName2:string,foodName3:string,foodName4:string,
     description: string,description2: string,description3: string,description4: string, price: any,price2: any,price3: any,
     price4: any,image:any, align:"right" | "left" })
     {
      const alignmentClass: string= attrs.align=== "right" ? "align-right" : "align-left";
return(
   
    <article className= { "menuItem " + alignmentClass} >
          <img className="food-pics" src={attrs.image} alt={attrs.foodName}  />
          
          <div className='price'>{attrs.price}</div>
          <h3 className='foodNames'>{attrs.foodName}</h3>
         
          <p>{attrs.description}</p>
             <div className='price'>{attrs.price2}</div>
          <h3 className='foodNames'>{attrs.foodName2}</h3>
           
          <p>{attrs.description2}</p>
          <div className='price'>{attrs.price3}</div>
          <h3 className='foodNames' >{attrs.foodName3}</h3>
          <p>{attrs.description3}</p>
          <div className='price'>{attrs.price4}</div>
          <h3 >{attrs.foodName4}</h3>
          <p>{attrs.description4}</p>
      
          
        </article >
)
}
export default MenuItem

