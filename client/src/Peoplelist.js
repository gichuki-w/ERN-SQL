function Peoplelist({ people }) {
    return (
        <div className="Peoplelist">
            <button>Show People</button>
            <ul>
                {people.map((person) => {
            <li key={person.name}>Name : {person.name}</li>
                })}
            </ul>
        </div>
    )
}
// Peoplelist.defaultProps = {
//     people: 'Default Title'
// }
export default Peoplelist