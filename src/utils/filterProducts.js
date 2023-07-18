
export function filterProducts (product ,category){
    const newProduct=   product.filter((product)=>{
        
        return product.category ===category
    })


    return newProduct

} 