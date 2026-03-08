function Form(){

    return(
        <form>
        <label for ="linkname">Link Name</label>
        <input type="text" name = "linkname"/>
        <br/>
        <label for ="linkURL">Link URL</label>
        <input type="text" name = "linkURL"/>


        <br/>
        <br/>
        <input type = "Submit"/>

      </form>
    )

}

export default Form