import uuid from 'react-uuid';
import webDev from "../assets/web dev.svg";
import scripts from "../assets/scripts.svg";

export const ServicesData =[
    {
        img: webDev,
        imgClasse:'front-end-img',
        title:'Full-Stack DEVELOPING',
        text:"I'm ready to provide all my knowledge to convert your design to an interactive and responsive website concerning the Front-end and the Back-end",
        id:uuid()
    },
    {
        img: scripts,
        imgClasse:'scripts-img',
        title:'Scripts and Utilities',
        text:'Do you have a web site in any plateforme and you want to add some futures that ain\'t provided you are in the right place',
        id:uuid()
    },
]

