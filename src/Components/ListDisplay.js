// const ListDisplay = props => {
//     console.log(props)
//     return (
//         <h2>list item here</h2>
//     )
// }

// export default ListDisplay;

// const ListDisplay = props => (
//     <section>
//         <h2>list item here</h2>
//         <button onClick={props.birthdayFn}>Happy Birthday!</button>
//     </section>
// )

// export default ListDisplay;

// Props object:
// {
//     hobby: 'Coding'
// }

const ListDisplay = props => <h2>{props.hobby}</h2>;

export default ListDisplay;