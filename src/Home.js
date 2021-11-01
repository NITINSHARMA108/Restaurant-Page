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
    //images
/*
   const div3=document.createElement('div');
    div3.setAttribute('class','images');
    const images=['https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/246565439_4518618921552384_7550422686738832237_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=WdhQyON-ntsAX-F-YN_&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=39bcc9a0b3a05002c59d7ea9fcd9c3bb&oe=6183F872','https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/163630756_2706849332939027_4275179176266503497_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=rSuyJbP4eZ4AX-UsApv&_nc_oc=AQmAWdg0Zu1PLaAn7j3GnYbGFpI14DkgPaSWGlNy-4HwpqAQACu-kZoLwOpFS_zDB7veJE1oZZ92gdaCng4ysPzH&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=ca3090c40040879668989fc67c46adae&oe=6183BBE9',
    'https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/148923680_167457741811404_8183301423186833357_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=TjQvTvQjO9cAX-jMMMp&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=293dc489949830afece8bf6f029420e0&oe=6184CC17','https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/141811960_274318227375414_1098552851120270597_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=h8qXKArCs8gAX9PXpkC&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=f47f0e0a2e5374ef4e484b395bef2c2c&oe=618415E8',
    'https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/141045924_762241214384989_8882980339900769582_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=6zzKm7mUrgUAX9unPnP&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=d925ca30631360b4094283a75dcadeee&oe=6183E8C7','https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/200188878_2614819722156563_6099168595901390891_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=yxbPF0aNjOMAX8PXQd3&_nc_ht=scontent-frt3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=f281320d8a14f59272a15d54fce0ab44&oe=6183B014'];
    images.map((image)=>{
        const i=document.createElement('img');
        i.setAttribute('src',image);
        div3.appendChild(i);

    })
    div.appendChild(div3);
*/

}
export default Home;