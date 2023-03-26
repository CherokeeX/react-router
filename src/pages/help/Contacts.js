import { Form, redirect, useActionData } from "react-router-dom";

export const Contacts = ()=>{
const errors =useActionData();
    return (
        <div className="contacts">
            <h2>Contact me</h2>
            <Form method="post" action="/help/contacts">
                <div>
                    <label htmlFor="email">e-mail : </label>
                    <input type="text" name="email" />
                    {errors?.email && <p className="errors">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message">Message : </label>
                    <textarea name="message"></textarea>
                    {errors?.message && <p className="errors">{errors.message}</p>}
                </div>
                
                <button type="submit">submit</button>
            </Form>
        </div>
    );
 
}
export const contactAction = async({request})=> {

const data = await request.formData();
const email = data.get('email');
const message = data.get('message');
const errors = {};
if (typeof email !== 'string' || !email.includes('@')){

    errors.email = 'Enter your Email';    
}
if (typeof message !=='string' || message.length <10){

    errors.message =' Please use  min 10 characters';
}
if(Object.keys(errors).length){
    return errors;
}

return redirect ('/help');

}