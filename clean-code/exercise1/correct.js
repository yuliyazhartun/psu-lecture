export const Counter = (array)=>{
    return array.map(({id, value})=><div key={id}>{value}</div>)
}