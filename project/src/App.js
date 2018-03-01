import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import News from './News';
import Video from './Video';
import Charts from './Charts';
import Artist from './Artist';
import Login from './Login';


class App extends Component {
  constructor() {
    super();

    this.state = {
      "music": [
        {
          "id": 1,
          "title": "Camila Cabello’s first album hit 1bn streams last week",
          "artist_id": 1,
          "date": "three hours ago",
          "content": "Last week, the album had its billionth stream. It only came out last month. “That’s insane,” she says. When we went to press, Havana was the 47th most streamed song of all time on Spotify. “That’s crazy,”she says, genuinely startled. My favourite stat is that fans have spent 15,397 years listening to Cabello’s summery, part-Latino, part-house pop music on Spotify. “How many?” Fifteen thousand, three hundred and ninety-seven. “That’s insane.” Camila went to No 1 in 99 countries and, to put it in context, she was listened to more in 2017 than Harry Styles.",
          "img": "https://sun9-1.userapi.com/c840635/v840635724/5a006/iVYKFiRgfMU.jpg",
        },
        {
          "id": 2,
          "title": "Camila Cabello Announces New 'Never Be the Same' Tour",
          "artist_id": 1,
          "date": "1 hour ago",
          "content": "Camila took to Twitter this morning to reveal the news and she did it in the most gloriously Camila way possible. The 'OMG' superstar tweeted: \"question #1: will you be my valentine? question #2: wanna come fly with me?\" alongside a cinematic poster. The highly anticipated 20 date tour is titled 'Never Be the Same' and it will be in support of her debut record Camila.",
          "img": "http://www.mtv.co.uk/sites/default/files/styles/image-w-520-h-292-scale-crop/public/mtv_uk/articles/2017/12/04/gettyimages-883392464.jpg?itok=WRpPKYlC",
        },
      ],
      "artists": [
        {
          "id": 1,
          "name": "Camila Cabello",
          "img": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/70/c4/04/70c40430-1a20-51fc-f1b7-8d695b255051/source/438x438sr.jpg",
          "description": "Vocalist Camila Cabello is a pop, R&B, and Latin-influenced performer who first came to prominence as a founding member of the girl group Fifth Harmony. Born Karla Camila Cabello Estrabao in Cojimar, Cuba, Cabello moved to Miami, Florida at the age of six. Growing up in a Spanish-speaking environment (her mother is Cuban and her father is Mexican), she fostered her love of music by listening to Celia Cruz and Alejandro Fernández. At the age of 15, she auditioned for The X Factor in Greensboro, North Carolina. Even though she was eliminated (along with her four future groupmates), the judges brought her back. Simon Cowell combined the girls into a quintet and formed Fifth Harmony. Despite finishing in third place, they went on to be the most successful contestants from that season. The group's debut EP, Better Together, was released in October 2013, with acoustic reworkings, Spanish versions (Juntos and Juntos Acoustic), and a remix album following a month later. Their debut single, \"Miss Movin' On,\" was the highest-charting U.S. X Factor single at the time, a feat beaten only by each successive Fifth Harmony single. The group's debut LP, Reflection, was released in early 2015, featuring the hits \"Sledgehammer\" (written by Meghan Trainor) and \"Worth It,\" featuring rapper Kid Ink. While backstage on Taylor Swift's 1989 world tour, Cabello wrote a duet with Canadian singer/songwriter Shawn Mendes. \"I Know What You Did Last Summer\" was released in November 2015 and immediately hit the Billboard Top 20. Fifth Harmony's sophomore set, 7/27, was issued in 2016, supported by a world tour and the hit single \"Work from Home.\" Outside of Fifth Harmony, Cabello paired with rapper Machine Gun Kelly for the October 2016 single \"Bad Things.\" Well received, the track made a slow climb toward the top of the Billboard singles chart, and ultimately garnered the singer her first Top Ten song as a solo artist. That December, Cabello announced her departure from Fifth Harmony. Following her exit, Cabello collaborated with Cashmere Cat on \"Love Incredible\" and Pitbull and J Balvin on \"Hey Ma\" from the Fate of the Furious soundtrack. In May 2017, Cabello released her debut (non-album) solo single, the Sia Furler co-written \"Crying in the Club,\" which peaked in the Top 40 of the U.S. Billboard Hot 100. She also joined Bruno Mars as the opening act on his 24K Magic World Tour. In early 2018 she returned with her debut full-length solo album, Camila, featuring production by Frank Dukes, Jarami, and others. Buoyed by the singles \"Havana,\" featuring Young Thug, and \"Never Be the Same,\" the album debuted at number one on the Billboard 200. ~ Neil Z. Yeung",
        },
      ],
      "songs": [
        {
          "id": 1,
          "title": "Crying In The Club",
          "artist_id": 1,
          "album_id": 1,
          "img": "https://vignette.wikia.nocookie.net/karlacamilacabello/images/0/0a/Camila-cabello-crying-in-the-club.jpg/revision/latest?cb=20170516231506",
        },
        {
          "id": 2,
          "title": "Havana",
          "artist_id": 1,
          "album_id": 1,
          "img": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/32/53/40/325340a2-c77e-777d-c391-64ed74434f2d/886446870298.jpg/146x0w.jpg",
        },
        {
          "id": 3,
          "title": "Havana(Remix)",
          "artist_id": 1,
          "album_id": 1,
          "img": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b2/65/33/b2653305-0fe5-587b-564d-400f6591b003/886446820569.jpg/146x0w.jpg",
        },
        {
          "id": 4,
          "title": "I Have Questions",
          "artist_id": 1,
          "album_id": 1,
          "img": "https://is1-ssl.mzstatic.com/image/thumb/Music82/v4/7b/82/24/7b8224f6-b9dc-5b42-a882-66c7d9689df6/886446506159.jpg/292x0w.jpg",
        },
        {
          "id": 5,
          "title": "OMG",
          "artist_id": 1,
          "album_id": 1,
          "img": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/8d/bb/00/8dbb00f0-cd79-5f5d-400d-cf49919d04ab/886446672960.jpg/292x0w.jpg",
        },
        {
          "id": 6,
          "title": "Scar Tissue",
          "artist_id": 1,
          "album_id": 1,
          "img": "https://img.discogs.com/omoUouDts9fYk440Kf8p1TuS6WU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11386038-1515369252-9728.png.jpg",
        }
      ],
      "albums": [
        {
          "id": 1,
          "title": "Camila",
          "artist_id": 1,
          "date": "2018",
          "img": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/32/53/40/325340a2-c77e-777d-c391-64ed74434f2d/886446870298.jpg/600x600bf.jpg",
          "songs": [1, 2, 3, 4, 5, 6],
        },
      ],
      "users": [
        {
          "id": 1,
          "login": "kuanyshrakhmetov@gmail.com",
          "password": "kuanysh",
        }
      ],
      "user": null,
    };

    this.getArtist = this.getArtist.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  getArtist(id) {
    let name = this.state.artists.filter(t => t.id == id);
    let artist = name[0];

    return artist;
  }

  getUser(login, password) {
    console.log(login);
    console.log(password);

    let user = this.state.users.filter(t => t.login == login && t.password == password);
    if(user.length > 0) {
      this.setState({
        "user": user[0],
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = '/' component = {Home} />
          <Route path = '/music' render = {(props) => (<Music 
            music = {this.state.music}
            getArtist = {this.getArtist} {...props} />)} />
          <Route path = '/video' component = {Video} />
          <Route path = '/news' render = {(props) => (<News 
            music = {this.state.music}
            getArtist = {this.getArtist} {...props} />)} />
          <Route path = '/charts' component = {Charts} />
          <Route path = '/artist' render = {(props) => (<Artist
            songs = {this.state.songs}
            artists = {this.state.artists}
            albums = {this.state.albums}
            music = {this.state.music}
            getArtist = {this.getArtist} {...props} />)} />
          <Route path = '/login' render = {(props) => (<Login
            getUser = {this.getUser} user = {this.state.user} {...props} />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
