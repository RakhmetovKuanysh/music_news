import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import Artists from './Artists';
import Video from './Video';
import Charts from './Charts';
import Artist from './Artist';
import Login from './Login';
import Admin from './Admin';


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
          "genre": "Pop",
          "img": "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/70/c4/04/70c40430-1a20-51fc-f1b7-8d695b255051/source/438x438sr.jpg",
          "description": "Vocalist Camila Cabello is a pop, R&B, and Latin-influenced performer who first came to prominence as a founding member of the girl group Fifth Harmony. Born Karla Camila Cabello Estrabao in Cojimar, Cuba, Cabello moved to Miami, Florida at the age of six. Growing up in a Spanish-speaking environment (her mother is Cuban and her father is Mexican), she fostered her love of music by listening to Celia Cruz and Alejandro Fernández. At the age of 15, she auditioned for The X Factor in Greensboro, North Carolina. Even though she was eliminated (along with her four future groupmates), the judges brought her back. Simon Cowell combined the girls into a quintet and formed Fifth Harmony. Despite finishing in third place, they went on to be the most successful contestants from that season. The group's debut EP, Better Together, was released in October 2013, with acoustic reworkings, Spanish versions (Juntos and Juntos Acoustic), and a remix album following a month later. Their debut single, \"Miss Movin' On,\" was the highest-charting U.S. X Factor single at the time, a feat beaten only by each successive Fifth Harmony single. The group's debut LP, Reflection, was released in early 2015, featuring the hits \"Sledgehammer\" (written by Meghan Trainor) and \"Worth It,\" featuring rapper Kid Ink. While backstage on Taylor Swift's 1989 world tour, Cabello wrote a duet with Canadian singer/songwriter Shawn Mendes. \"I Know What You Did Last Summer\" was released in November 2015 and immediately hit the Billboard Top 20. Fifth Harmony's sophomore set, 7/27, was issued in 2016, supported by a world tour and the hit single \"Work from Home.\" Outside of Fifth Harmony, Cabello paired with rapper Machine Gun Kelly for the October 2016 single \"Bad Things.\" Well received, the track made a slow climb toward the top of the Billboard singles chart, and ultimately garnered the singer her first Top Ten song as a solo artist. That December, Cabello announced her departure from Fifth Harmony. Following her exit, Cabello collaborated with Cashmere Cat on \"Love Incredible\" and Pitbull and J Balvin on \"Hey Ma\" from the Fate of the Furious soundtrack. In May 2017, Cabello released her debut (non-album) solo single, the Sia Furler co-written \"Crying in the Club,\" which peaked in the Top 40 of the U.S. Billboard Hot 100. She also joined Bruno Mars as the opening act on his 24K Magic World Tour. In early 2018 she returned with her debut full-length solo album, Camila, featuring production by Frank Dukes, Jarami, and others. Buoyed by the singles \"Havana,\" featuring Young Thug, and \"Never Be the Same,\" the album debuted at number one on the Billboard 200. ~ Neil Z. Yeung",
        },
        {
          "id": 2,
          "name": "Justin Bieber",
          "genre": "Pop",
          "img": "http://pgxb-w8dy.accessdomain.com/uploads/images/crop/32fe88e6/11d49b35/91b12aa7/f202132f/32fe88e611d49b3591b12aa7f202132f_L3VwbG9hZHMvaW1hZ2VzL29yaWdpbmFsL05ld3MvTWFyY2ggMjAxNS9KdXN0aW4gQmllYmVyIGdyb3dpbmcgdXAvanVzdGluYmVpYmVyMS5qcGc=.jpg",
          "description": "Canadian pop singer Justin Bieber was barely into his teens when he released his 2009 debut, My World, and became one of the youngest success stories in contemporary pop when it went either platinum or double platinum in several countries. For the next few years, successive releases -- including remix compilations, acoustic sets, a documentary tie-in, a Christmas album, and even some proper studio recordings -- shot forth at a dizzying rate. Bieber developed a massive global following, named Beliebers. During the early 2010s, his recording activity slowed but he rebounded during the middle of that decade with the Grammy-nominated 2015 album Purpose. A native of Stratford, Ontario, Bieber placed second in a local 2007 singing competition and began posting his performances on YouTube. The videos caught the attention of Scooter Braun, a talent agent and former So So Def marketing executive, who helped Bieber land an impromptu audition with the R&B star Usher. Impressed by what he saw, Usher -- along with Island/Def Jam chairman L.A. Reid -- quickly signed the 15-year-old Bieber to a recording contract. Bieber released his first single, \"One Time,\" in May 2009. Supported by a popular video that featured an appearance by Usher, \"One Time\" went platinum in both Canada and America, a feat that was replicated later that year with the release of My World. The disc was technically an EP, featuring only seven songs, but it reached number six on the Billboard 200 album chart and sold over a million copies. Less than a year after his debut, Bieber returned with the \"second half\" of My World, a ten-song release titled My World 2.0. Further demonstrating his and his management's marketing power, over 8,000 fans who pre-ordered My World 2.0 had their head shots used in a photo mosaic (formed to look like a portrait of Bieber) that was displayed on the back side of the disc's booklet. The release topped the Billboard 200. A few weeks later, a combination of My World and My World 2.0, titled My Worlds, appeared in some territories. By the end of 2010, Bieber issued My Worlds Acoustic, a set featuring acoustic versions of nine songs off the My World discs, as well as one new song. The following February, the 3-D documentary Never Say Never was released to theaters. The seven-track Never Say Never: The Remixes, released just days after the film, maintained the flow of Bieber product, and featured appearances from the likes of Kanye West, Usher, and Miley Cyrus. Just in time for Christmas 2011 came the holiday-themed Under the Mistletoe, complete with several celebrity guest duets and an original song, \"Mistletoe,\" for the first single, which entered the Holiday Songs chart at number two. In 2012, Bieber returned with the proper follow-up to My World 2.0, titled Believe. With a sound based in dance and R&B, it featured production from Darkchild, Diplo, and Max Martin. Believe became his fourth number one album, paced by Top Ten hits for \"Boyfriend,\" \"As Long as You Love Me\" (featuring Big Sean), and \"Beauty and a Beat\" (featuring Nicki Minaj). Believe Acoustic, a sequel to My Worlds Acoustic, followed in 2013. Late that year, Bieber released the first in a weekly series of singles. Nearly all of them charted, led by Top 40 showings for \"All Around the World\" (featuring Ludacris) and \"Heartbreaker.\" Those songs, as well as others, were compiled for release as Journals, a digital download-only album that wasn't submitted for sales tracking, so it did not appear on the Billboard 200. Only two days later, on December 25, the documentary Justin Bieber's Believe was released to theaters. A collaboration with Cody Simpson, \"Home to Mama,\" was the lone charting release in 2014, a year in which Bieber made headlines for a series of public indiscretions. In 2015, a remix of \"Where Are You Now\" appeared on Diplo and Skrillex Present Jack Ü and reached the Top Ten of the Hot 100. Later in the year, \"What Do You Mean?,\" a track that skillfully latched onto the tropical house subgenre -- popularized by the Felix Jaehn remix of OMI's \"Cheerleader\" -- topped that chart. It was Bieber's first number one U.S. single and paved the way for Purpose, his third proper studio album. It debuted at the top of the Billboard 200. After spending the first half of 2016 touring in support of Purpose, Bieber collaborated on a pair of singles, first with Major Lazer and MØ on the hit \"Cold Water,\" then later that summer with DJ Snake on \"Let Me Love You.\" In April of 2017, he was featured on a remix of the hit reggaeton-pop song \"Despacito\" by Luis Fonsi and Daddy Yankee, marking the first time Bieber sang in Spanish. That same month he notched two back-to-back number one hits when his DJ Khaled collaboration, \"I'm the One,\" preceded \"Despacito\" at the top of the Billboard Hot 100. Another single, \"Friends,\" appeared in August of that year. ~ Matt Collar & Andy Kellman",
        },
      ],
      "songs": [
        {
          "id": 1,
          "title": "Crying In The Club",
          "artist_id": 1,
          "img": "https://vignette.wikia.nocookie.net/karlacamilacabello/images/0/0a/Camila-cabello-crying-in-the-club.jpg/revision/latest?cb=20170516231506",
        },
        {
          "id": 2,
          "title": "Havana",
          "artist_id": 1,
          "img": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/32/53/40/325340a2-c77e-777d-c391-64ed74434f2d/886446870298.jpg/146x0w.jpg",
        },
        {
          "id": 3,
          "title": "Havana(Remix)",
          "artist_id": 1,
          "img": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b2/65/33/b2653305-0fe5-587b-564d-400f6591b003/886446820569.jpg/146x0w.jpg",
        },
        {
          "id": 4,
          "title": "I Have Questions",
          "artist_id": 1,
          "img": "https://is1-ssl.mzstatic.com/image/thumb/Music82/v4/7b/82/24/7b8224f6-b9dc-5b42-a882-66c7d9689df6/886446506159.jpg/292x0w.jpg",
        },
        {
          "id": 5,
          "title": "OMG",
          "artist_id": 1,
          "img": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/8d/bb/00/8dbb00f0-cd79-5f5d-400d-cf49919d04ab/886446672960.jpg/292x0w.jpg",
        },
        {
          "id": 6,
          "title": "Scar Tissue",
          "artist_id": 1,
          "img": "https://img.discogs.com/omoUouDts9fYk440Kf8p1TuS6WU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11386038-1515369252-9728.png.jpg",
        },
        {
          "id": 7,
          "title": "What Do You Mean?",
          "artist_id": 2,
          "img": "https://fthmb.tqn.com/yjmzBa7PVupW3jScwArxLojxI5M=/768x0/filters:no_upscale()/justin-bieber-what-do-you-mean-57bb69285f9b58cdfd3a86b9.jpg",
        }
      ],
      "albums": [
        {
          "id": 1,
          "title": "Camila",
          "artist_id": 1,
          "date": "12 January 2018",
          "img": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/32/53/40/325340a2-c77e-777d-c391-64ed74434f2d/886446870298.jpg/600x600bf.jpg",
        },
        {
          "id": 2,
          "title": "Purpose",
          "artist_id": 2,
          "date": "16 September 2016",
          "img": "https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/57/4a/71/574a712f-b128-e56f-907c-32fae1c4f7cf/UMG_cvrart_00602547587411_01_RGB72_1500x1500_15UMGIM59807.jpg/1200x630bb.jpg",
        }
      ],
      "users": [
        {
          "id": 1,
          "login": "kuanyshrakhmetov@gmail.com",
          "password": "kuanysh",
        }
      ],
      "user": {
        "id": 1,
        "login": "kuanyshrakhmetov@gmail.com",
        "name": "Kuanysh",
        "surname": "Rakhmetov",
        "password": "kuanysh",
      },
      "musicCnt": 3,
      "userCnt": 2,
      "albumCnt": 3,
      "songCnt": 8,
      "artistCnt": 3,
    };

    this.getArtist = this.getArtist.bind(this);
    this.getUser = this.getUser.bind(this);
    this.addMusicNews = this.addMusicNews.bind(this);
    this.addArtist = this.addArtist.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
  }

  editAlbum(id, title, artist_id, date, img) {
    let albums = this.state.albums;
    let album = albums.find(al => al.id == id);

    album.title = title;
    album.artist_id = artist_id;
    album.date = date;
    album.img = img;

    this.setState({
      "albums": albums,
    })
  }

  getArtist(id) {
    let name = this.state.artists.filter(t => t.id == id);
    let artist = name[0];

    return artist;
  }

  addMusicNews(text, title, artist_id, img) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ]; // constants

    let date = new Date();

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    let dateStr = day + ' ' + monthNames[monthIndex] + ' ' + year;

    console.log(dateStr);

    let news = {
      "id": this.state.musicCnt,
      "content": text,
      "title": title,
      "date": dateStr,
      "artist_id": artist_id,
      "img": img,
    };

    let music = this.state.music;
    music.push(news);

    this.setState({
      "music": music,
      "musicCnt": this.state.musicCnt + 1,
    });

    console.log(this.state.music);
  }

  addArtist(name, description, genre, img) {
    let artist = {
      "id": this.state.artistCnt,
      "description": description,
      "name": name,
      "genre": genre,
      "img": img,
    };

    let artists = this.state.artists;
    artists.push(artist);

    this.setState({
      "artists": artists,
      "artistCnt": this.state.artistCnt + 1,
    });

    console.log(artists);
  }

  addAlbum(title, artist_id, img, date) {
    let album = {
      "id": this.state.albumCnt,
      "title": title,
      "artist_id": artist_id,
      "date": date,
      "img": img,
    };

    let albums = this.state.albums;
    albums.push(album);

    this.setState({
      "albums": albums,
      "albumCnt": this.state.albumCnt + 1,
    });
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
          <Route path = '/video' render = {(props) => (<Video 
            music = {this.state.music}
            getArtist = {this.getArtist} {...props} />)} />
          <Route path = '/artists' render = {(props) => (<Artists 
            music = {this.state.music}
            artists = {this.state.artists}
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
          <Route path = '/admin' render = {(props) => (<Admin
            songs = {this.state.songs}
            artists = {this.state.artists}
            albums = {this.state.albums}
            music = {this.state.music}
            getArtist = {this.getArtist}
            addArtist = {this.addArtist}
            editAlbum = {this.editAlbum}
            addAlbum = {this.addAlbum}
            addMusicNews = {this.addMusicNews}
            getUser = {this.getUser} user = {this.state.user} {...props} />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
