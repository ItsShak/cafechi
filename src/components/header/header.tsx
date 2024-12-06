import "./style.css"
function Header(attrs: {backgroundPic:any, logo:any, PrCafeName:string, EngCafeName: string }){
    return (
      <header>
       
        <img className= "cafe-logo"  src={attrs.logo} alt={attrs.PrCafeName} />
        <h1 id= "headerH1">{attrs.PrCafeName}</h1>
        <h3 id="headerh3"> {attrs.EngCafeName}  </h3>
      
      </header>
            )
}
export default Header