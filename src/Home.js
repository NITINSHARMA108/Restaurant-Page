function Home(){
    let div=document.querySelector('.home-page');
    const div1=document.createElement('div');
    div1.setAttribute('class','row1');
    const img1=document.createElement('img');
    img1.setAttribute('src','https://www.bar-palladio.com/files/images/Henry%20Wilson/_HJW8451.jpg');
    const story=document.createElement('div');
    const heading1=document.createElement('h2');
    heading1.appendChild(document.createTextNode('Our Story'));
    const p1=document.createElement('p');
    p1.appendChild(document.createTextNode('Bar Palladio Jaipur was born with a simple intent: present classic Italian cuisine in a beautiful setting, create an atmosphere of magic, a sense of surprise. Inspired by the iconic Caffé Florian and Harry’s Bar in Venice and christened after the Renaissance architect Andrea Palladio, Bar Palladio Jaipur is an ode to Italian style and cuisine, viewed through the prism of a Mughal dreamworld.'));
    story.appendChild(heading1);
    story.appendChild(p1);
    div1.appendChild(img1);  
    div1.appendChild(story);
    div.appendChild(div1);


    //second row
    const div2=document.createElement('div');
    div2.setAttribute('class','row2');
    const img2=document.createElement('img');
    img2.setAttribute('src','https://www.bar-palladio.com/files/images/Henry%20Wilson/_HJW8558.jpg');
    const philosophy=document.createElement('div');
    const heading2=document.createElement('h2');
    heading2.appendChild(document.createTextNode('Our Philosophy'));
    const p2=document.createElement('p');
    p2.appendChild(document.createTextNode('Bar Palladio Jaipur was born with a simple intent: present classic Italian cuisine in a beautiful setting, create an atmosphere of magic, a sense of surprise. Inspired by the iconic Caffé Florian and Harry’s Bar in Venice and christened after the Renaissance architect Andrea Palladio, Bar Palladio Jaipur is an ode to Italian style and cuisine, viewed through the prism of a Mughal dreamworld.'));
    philosophy.appendChild(heading2);
    philosophy.appendChild(p2);
    
    div2.appendChild(philosophy);
    div2.appendChild(img2);  

    div.appendChild(div2);


}
export default Home;