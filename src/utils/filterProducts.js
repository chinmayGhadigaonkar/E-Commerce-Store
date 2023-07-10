
export function filterProducts (product ,category){
    console.log(product)

    const newProduct=   product.filter((product)=>{
        
        return product.category ===category
    })


    return newProduct

} 