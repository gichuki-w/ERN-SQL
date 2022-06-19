
export default function List({all}) {

  console.log(all)
  const yee = all.map((element) => {
    return (
      <li>{element.id} {element.name}</li>
    )
  })
  return (
    <ul>
      {yee}
      {/* {all["body"].map((x) => {return <li>{x}</li>})} */}
    </ul>
  )
}