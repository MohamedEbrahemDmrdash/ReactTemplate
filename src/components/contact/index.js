import React , {Fragment} from "react";
import { ContactSection , ContactTitle , Span , Form , FormInput , TextArea , InputSubmit , InputExp ,InputText,InputEmail} from './style.js';
import Footer from './../footer';
const contact = () =>{
    return (
      <Fragment>
        <ContactSection>
              <div className="container">
                  <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                  <Form>
                      <FormInput>
                          <InputText type="text" placeholder="Your Name" />
                          <InputEmail type="email" placeholder="Your Email" />
                      </FormInput>
                      <InputExp type="text" placeholder="Your Subject" />
                      <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                      <InputSubmit type="submit" value="Send Message" />
                  </Form>
              </div>
        </ContactSection>
        <Footer />
      </Fragment>
    )
}

export default contact;