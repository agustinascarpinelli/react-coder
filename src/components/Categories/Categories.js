export const Categories =(handleOrigin,handlePresentation)=>{

const [origin]=useState([
    {id:'Brasil', text:'Brasil'},
    {id:'Colombia', text:'Colombia'},
    {id:'Guatamela', text:'Guatemala'},
    {id:'Italia', text:'Italia'},
])

const [presentation]=useState([
    {id:'Capsula', text:'Capsula'},
    {id:'Grano', text:'Grano'},
    {id:'Molido', text:'Molido'},
])

const [price]=useStae([
    {id:'900', text:'Menos de 900'},
    {id:'1000', text:'Menos de 1000'},
    {id:'2000', text:'Menos de 2000'},
    {id:'3000', text:'Menos de 3000'},
])

const [filteredProducts, setFilteredProducts]=useState([])
const [active,setActive]=useState("")
const [category,setCategory]=useState("")

const handleChange=(individualSpan)=>{
    setActive(individualSpan.id)
    setCategory(individualSpan.text)
    filterFunction(individualSpan.text)
}
const filterByOriginFunction=(text)=>{
    if(products.length>1){
        const filter=products.filter((product)=>product.origin===text)
        setFilteredProducts(filter)
    }
    
}
const filterByPresentationFunction=(text)=>{
    if(products.length>1){
        const filter=products.filter((product)=>product.presentation===text)
        setFilteredProducts(filter)
    }
    
}
const returnAllProducts=()=>{
    setActive("")
    setCategory("")
    setFilteredProducts("")

}
    return(

            <div className="filter-box">
                <h6>Origen</h6>
                {origin.map((prod,index)=>{
                    <span key={index} id={prod.id}
                    onClick={handleOrigin}>{prod.text}</span>
                })}
                   <h6>Origen</h6>
                {presentation.map((prod,index)=>{
                    <span key={index} id={prod.id}
                    onClick={handlePresentation}>{prod.text}</span>
                })}
            </div>
    )
            }