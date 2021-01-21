import React from 'react'
import Stage1 from "./Stages/Stage1";
import '../App.css'
import {Container} from "@material-ui/core";

let catStore = ['http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cat-face.png'];

function Main() {

    const [store,setStore] = React.useState(
        [
            {id: 1 , url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cat-face.png'},
            {id: 2 , url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/hamster-face.png'},
            {id: 3 , url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/dog-face.png'},
            {id: 4 , url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/fox-face.png'},
            {id: 5 , url: 'https://cdn140.picsart.com/321248359038211.png?type=webp&to=min&r=640'}
        ]
    )


    let j = 0;
    const output = document.querySelector('#out')
    const pic = document.querySelector('#picture')

    async function myFetch() {
        try {
            let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3&page=10&order=Desc');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                response = await response.json();
                // console.log(response)

                setStore(
                    response.map(
                      (  el,i) =>{
                      return       store[i].url =el.url
                                    catStore[i] = el.url
                        }
                    )
                )
                console.log(store)
                console.log(catStore)


            }

        } catch (e) {
            console.log(e);
        }


    }
    j++
 const   showpic = () => {

     // output.appendChild(catStore[j])
     // console.log(output, j,catStore, catStore[j])
     // output.removeChild(output.firstChild)
     // if (catStore.length > 20) {
     //     catStore.splice(0, 10)
     //     j = catStore.length - 2

     // }
     }

    const body = document.querySelector('body')


    document.addEventListener('DOMContentLoaded', myFetch() )
    body.addEventListener('click', (e) => {
        // showpic();
        myFetch()
    })



    return (

            <div id='container'>
          <Stage1  url={catStore[0]}/>
          {/*<Stage1  url={store[0].url}/>*/}
            </div>


    );
}

export default Main;
