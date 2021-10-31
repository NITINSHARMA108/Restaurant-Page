function Nav(){
    const header=document.querySelector('.nav');
   /* header.setAttribute('class','nav');*/
    const heading=document.createElement('h1');
    heading.append(document.createTextNode('Palladio Restaurant'));
    heading.setAttribute('style','color:#fff');
    header.appendChild(heading);

    const buttons=document.createElement('div');
    buttons.setAttribute('class','buttons');
    header.appendChild(buttons);
    let l=['Home','Menu','Contact'];
    l.forEach(element => {
        const button=document.createElement('button');
        button.appendChild(document.createTextNode(element));
        button.setAttribute('id',element);
        buttons.appendChild(button);
    });
   // document.body.append(header);
}
export default Nav;