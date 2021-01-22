import React from 'react'
import Stage1 from "./Stages/Stage1";
import '../App.css'
import HTTP from "./Https/Https";
import Button from '@material-ui/core/Button/Button'

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
  const MyFetch =  () => {

        HTTP.get('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc')
            // .then(response =>response)
            .then(response =>console.log(response))

            .catch(err => console.log(err));
    }




    return (

            <div id='container'>
          <Stage1  url={store[0].url}/>
          <Button onClick={MyFetch}  >Press Me </Button>
          {/*<Stage1  url={store[0].url}/>*/}
            </div>


    );
}

export default Main;
