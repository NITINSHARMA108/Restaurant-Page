function Contact(){
    const contactdiv=document.querySelector('.contact-page');
    
    const Address=document.createElement('iframe');
   // const Contact_no=document.createElement('div');
    const socialMedia=document.createElement('div');
    Address.setAttribute('src','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14232.668856585968!2d75.8138791!3d26.8981878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x685f3563049f8d05!2sBar%20Palladio%20Jaipur!5e0!3m2!1sen!2sin!4v1635442073892!5m2!1sen!2sin');
    contactdiv.appendChild(Address);
    // creating a contact box
    const contactbox=document.createElement('div');
    contactbox.setAttribute('class','contact-box');
    const obj={
        "fa-phone":"+919024455420",
        "fa-envelope":'palladio.jaipur@gmail.com',
        "fa-map-marker":'Hotel Narain Niwas, Narayan Singh Circle, Jaipur'
    };
    for(let prop in obj){
        const div=document.createElement('div');
        contactbox.appendChild(div);
        const i=document.createElement('i');
        i.setAttribute('class',`fas ${prop}`);
        div.appendChild(i);
        div.appendChild(document.createTextNode(obj[prop]));

    }
    contactdiv.appendChild(contactbox);

    

    // creating social media section
    socialMedia.setAttribute('class','social-media');
    const social=['fa-facebook','fa-instagram','fa-linkedin','fa-pinterest'];
    social.map((s)=>{
        const i=document.createElement('i');
        i.setAttribute('class',`fab ${s}`);
        socialMedia.appendChild(i);

    })
    contactdiv.appendChild(socialMedia);

    

    

}
//<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
export default Contact;
//<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>