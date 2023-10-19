import Button from "./Button"


const Buttonlist=()=>{
    return(
        <div className="flex">
          <Button name={"all"}/>
          <Button name={"Live"}/>
          <Button name="Sports"/>
          <Button name="Cricket"/>
          <Button name="News"/>
          <Button name="Music"/>
          <Button name="Serial"/>

          <Button/>
          <Button/>
          <Button/>
        </div>
    )
}
export default Buttonlist 