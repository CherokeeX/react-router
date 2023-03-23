
export const Contacts = ()=>{

    return (
        <div className="contacts">
            <h2>Contact me</h2>
            <form>
                <div>
                    <label for="email">e-mail : </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label for="message">Message : </label>
                    <textarea name="message"></textarea>
                </div>
                
                <button type="submit">submit</button>
            </form>
        </div>
    );
 
}