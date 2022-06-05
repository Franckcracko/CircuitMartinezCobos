const Section = (props) => {
    return(<li key={props.id}><a href={props.urlsection}>{props.title}</a></li>)
}
export default Section