import './ItemCount.css'
const ItemCount = (props) =>{
    
    return(
    <div className={'addItems'}>
        <input type={'number'} min={1} max={10} value={props.value} className={'itemValue'} />
        <button className={'ghostButton'} onClick={props.onAdd} >Agregar</button>
    </div>)
}
export default ItemCount