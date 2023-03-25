import { Form, redirect } from "react-router-dom";

export const Contacts = ()=>{

    return (
        <div className="contacts">
            <h2>Contact me</h2>
            <Form method="post" action="/help/contacts">
                <div>
                    <label htmlFor="email">e-mail : </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message : </label>
                    <textarea name="message"></textarea>
                </div>
                
                <button type="submit">submit</button>
            </Form>
        </div>
    );
 
}

export const contactAction = async({request})=> {

const result = await request.formData();
console.log(result.get('email'));
console.log(result.get('message'));
return redirect ('/help');

}