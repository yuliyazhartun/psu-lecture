export const Counter = (array)=>{
    return array.map((element)=><div key={element.id}>{element.value}</div>)
}