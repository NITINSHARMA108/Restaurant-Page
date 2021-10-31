//import { HotModuleReplacementPlugin } from 'webpack';
import Menu from './Menu.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Contact from './Contact.js';
Nav();
function handle(){
    const list=['Home','Menu','Contact'];
    window.addEventListener('load',function(){
        
        Home();
    })
    
    list.forEach(element => {
        document.getElementById(element).addEventListener('click',function(){
            
               if(element=='Menu')
               {
                console.log(document.querySelector('.menu-page'));
                   document.querySelector('.menu-page').style.display='flex';
                   
                   document.querySelector('.home-page').style.display='none';
                   document.querySelector('.contact-page').style.display='none';
                   

               }

               else if(element=='Contact')
               {
                    document.querySelector('.contact-page').style.display='flex';
                    document.querySelector('.home-page').style.display='none';
                    document.querySelector('.menu-page').style.display='none';
                    
               }
               else{
                   console.log('in home');
                   document.querySelector('.home-page').style.display='flex';
                   console.log('in contact');
                   document.querySelector('.contact-page').style.display='none';
                   console.log('in menu');
                   document.querySelector('.menu-page').style.display='none';
                   
               }

        
        })
        
    });
}


Menu();
Contact();

handle();
//Menu();

