// import bulmaCarousel from 'bulma-carousel';

//***********************************************
//***** string/array manpulation variables ******
//***********************************************

// save all fields but notes for the update only notes
var save_name, save_beach_photo, save_beach_photo_credit, save_access, save_parking,  save_hours, save_avail_rec, save_latitude, save_longitude =''

// ??????????????????????????????????????/
var rec, hours, parking, photo, photoCredit =''
var recArray, hoursArray, parkingArray, photoArray, photoCreditArray =[]

// use these fields to set state for tides after strings manipulated
var extremeTide1, highDate1, extremeDate1, highTime1, extremeTime1=''
var highHeight1, extremeHeight1 = 0

var extremeTide2, highDate2, extremeDate2, highTime2, extremeTime2=''
var highHeight2, extremeHeight2 = 0

var extremeTide3, highDate3, extremeDate3, highTime3, extremeTime3=''
var highHeight3, extremeHeight3 = 0

var extremeTide4, highDate4, extremeDate4, highTime4, extremeTime4=''
var highHeight4, extremeHeight4 = 0

var date=[]
var time =[]
var height =[]

// fields to display in table
var high1, highDate1, highTime1, highHeight1 = ''
var low1, lowDate1, lowTime1,lowHeight1 = ''
var high2, highDate2, highTime2, highHeight2 = ''
var low2, lowDate2, lowTime2, lowHeight2 = ''

//***********************************************
//*************** front end *********************
//***********************************************
//********* sends the request back end  *********
//***********************************************
class App extends React.Component {

  // Assign state itself, and a default value for items
  state = {
    beaches:[],
  }

  componentDidMount = () => {
  // var carousels = bulmaCarousel.attach('.carousel',
  // {
    // slidesToScroll:5,
    // slidesTooShow: 1
  // });

    axios.get('/beaches').then(
      (response) => {
        this.setState({
          beaches:response.data,
        })
      }
    )
  }

  //***********************************************
  //**************** GET TIDES ********************
  //***********************************************
  getTides = (event) => {

    // console.log(this.state.lat);
    // console.log(this.state.long);

    fetch("https://tides.p.rapidapi.com/tides?latitude=" + this.state.lat + "&longitude=" + this.state.long, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "tides.p.rapidapi.com",
    		"x-rapidapi-key": "72f2d4d192mshd7feaecf8ffd802p140faajsna045792ab384"
    	}
    })
    .then (response => response.json())
      .then(data => {
      // console.log(data);
      // console.log(data.extremes);
      // console.log(data.extremes[0].datetime);


      for (let i = 0; i <= 3; i++) {
       let extremeNewDate = new Date(data.extremes[i].datetime)
       let extremeTime = extremeNewDate.toLocaleTimeString()
       let extremeDate = extremeNewDate.toLocaleDateString()
       let extremeHeight = data.extremes[i].height
       let extremeRoundedHeight= Math.round(extremeHeight * 100)/100

       // console.log(i);
       // console.log(extremeNewDate);
       // console.log(extremeDate);
       // console.log(extremeTime);
       // console.log(extremeRoundedHeight);

       date[i]=extremeDate;
       time[i]=extremeTime;
       height[i]=extremeRoundedHeight;
      }

      this.setState(
      {
      high1:data.extremes[0].state,
      highDate1:date[0],
      highTime1:time[0],
      highHeight1:height[0],

      low1:data.extremes[1].state,
      lowDate1:date[1],
      lowTime1:time[1],
      lowHeight1:height[1],

      high2:data.extremes[2].state,
      highDate2:date[2],
      highTime2:time[2],
      highHeight2:height[2],

      low2:data.extremes[3].state,
      lowDate2:date[3],
      lowTime2:time[3],
      lowHeight2:height[3],
      }
    )
    return data;
    })

    .catch(err => {
    console.log(err);
    });
  }
  //***********************************************
  //**************** CREATE ***********************
  //***********************************************

  createBeach = (event) => {
    event.preventDefault();
    axios.post(
      '/beaches',
      {
        name:this.state.newBeach_name,
        photo:this.state.newBeach_photo,
        photo_credit:this.state.newBeach_photo_credit,
        access:this.state.newBeach_access,
        parking:this.state.newBeach_parking,
        hours:this.state.newBeach_hours,
        avail_rec:this.state.newBeach_avail_rec,
        notes:this.state.newBeach_notes,
        latitude:this.state.newBeach_latitude,
        longitude:this.state.newBeach_longitude,
      }
    ).then(
      (response) => {
        this.setState({
          beaches:response.data
        })
      }
    )
  }

  changeNewBeachName = (event) => {
    this.setState({
      newBeach_name:event.target.value
    });
  }

  changeNewBeachPhoto = (event) => {
    this.setState({
      newBeach_photo:event.target.value
    });
  }

  changeNewBeachPhoto_Credit = (event) => {
    this.setState({
      newBeach_photo_credit:event.target.value
    });
  }

  changeNewBeachAccess = (event) => {
    this.setState({
      newBeach_access:event.target.value
    });
  }

  changeNewBeachParking = (event) => {
    this.setState({
      newBeach_parking:event.target.value
    });
  }

  changeNewBeachHours = (event) => {
    this.setState({
      newBeach_hours:event.target.value
    });
  }

  changeNewBeachAvail_Rec = (event) => {
    this.setState({
      newBeach_avail_rec:event.target.value
    });
  }

  changeNewBeachNotes = (event) => {
    this.setState({
      newBeach_notes:event.target.value
    });
  }

  changeNewBeachLatitude = (event) => {
    this.setState({
      newBeach_latitude:event.target.value
    });
  }

  changeNewBeachLongitude = (event) => {
    this.setState({
      newBeach_longitude:event.target.value
    });
  }
  //***********************************************
  //**************** DELETE ***********************
  //***********************************************
  deleteBeach = (event) => {
    axios.delete('/beaches/' + event.target.value).then(
      (response) => {
        this.setState({
          beaches:response.data
        })
      }
    )
  }

  //***********************************************
  //**************** UPDATE ***********************
  //***********************************************
  updateBeach = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
      '/beaches/' + id,
      {
        name:save_name,
        photo:save_beach_photo,
        photo_credit:save_beach_photo_credit,
        access:save_access,
        parking:save_parking,
        hours:save_hours,
        avail_rec:save_avail_rec,
        notes:this.state.updateBeach_notes,
        latitude:save_latitude,
        longitude:save_longitude,
      }
    ).then(
      (response) => {
        this.setState({
          beaches:response.data,
          name:'',
          photo:'',
          photo_credit:'',
          access:'',
          parking:'',
          hours:'',
          avail_rec:'',
          notes:'',
          latitude:'',
          longitude:'',
        })
      }
    )
  }

  changeUpdateBeachNotes = (event) => {
    this.setState({
      updateBeach_notes:event.target.value
    });
  }

  render = () => {
    return <div>
      <div className="container">

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              {/* <img src="https://i.imgur.com/kWKYRa8.jpg"/>*/}
            </a>
          </div>

          {/* nav bar */}
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">town history</a>
              <a className="navbar-item">restaurants</a>
              <a className="navbar-item">must visit</a>
              <a className="navbar-item">helpful links</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className= "button is-primary">
                    <strong>get started</strong>
                  </a>
                  <a className= "button is-light">
                    <strong>log in</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* hero section */}
        <section className="hero">
          <div className="columns">
          <div className="column is-one-third">
              <img src="https://i.imgur.com/kWKYRa8.jpg"/>
            </div>
          <div className="column is-two-thirds">
              <h1 className="title">Welcome Marshfield Beachgoers!</h1>
              <h2>Below is your Beach Bucket list!</h2>
              {/*  add logic later <h2 update your vote!</h2>*/}

              {/* create beach */}
              <details>
                <summary>Create new discovered private Beach!</summary>
                  <div className="card">
                    <div className="card-content">
                      <form onSubmit={this.createBeach}>
                        <input onKeyUp={this.changeNewBeachName} type='text' placeholder='name' /><br/>
                        <input onKeyUp={this.changeNewBeachPhoto} type='text' placeholder='photo' /><br/>
                        <input onKeyUp={this.changeNewBeachPhoto_Credit} type='text' placeholder='photo credit' /><br/>
                        <input onKeyUp={this.changeNewBeachAccess} type='text' placeholder='access' /><br/>
                        <input onKeyUp={this.changeNewBeachParking} type='text' placeholder='parking' /><br/>
                        <input onKeyUp={this.changeNewBeachHours} type='text' placeholder='hours' /><br/>
                        <input onKeyUp={this.changeNewBeachAvail_Rec} type='text' placeholder='available recreation' /><br/>
                        <textarea onKeyUp={this.changeNewBeachNotes} placeholder='notes' ></textarea><br/>
                        <input onKeyUp={this.changeNewBeachLatitude} type='number' step="0.001" placeholder='latitude' /><br/>
                        <input onKeyUp={this.changeNewBeachLongitude} type='number' step="0.001" placeholder='longitude' /><br/>
                        <input type="submit" value="Create Beach" />
                      </form>
                    </div>
                  </div>
              </details>
            </div>
          </div>
        </section>

        {/* beach list main container */}
        <div className="container">
          {/* beach list CRUD container */}
          <div className="container">
            <h2> List of Marshfield Beaches </h2>
            <ul>
              {
                this.state.beaches.map((beach, index) => {

                  {/* save all fields this.state.notes is the only field allowed to be updated */}
                  save_name=beach.name
                  save_beach_photo=beach.photo
                  save_beach_photo_credit=beach.photo_credit
                  save_access=beach.access
                  save_parking=beach.parking
                  save_hours=beach.hours
                  save_avail_rec=beach.avail_rec
                  save_latitude=beach.latitude
                  save_longitude=beach.longitude

                  this.state.lat=beach.latitude
                  this.state.long=beach.longitude

                  {/* turn parking, todo, hour and photos into an array */}
                  parking = beach.parking
                  parkingArray=parking.split(",")
                  hours = beach.hours
                  hoursArray=hours.split(",")
                  rec = beach.avail_rec
                  recArray=rec.split(",")




                  // console.log(recArray[0])

                  return <li key={index}>
                    <div className="columns">

                      {/* beach photo carousel} */}
                      <div className="column photo-section">

                        <h1>{beach.name}</h1>
                        <img src={beach.photo}/>
                        <h3>photo credit: {beach.photo_credit}</h3>

                      </div>

                      {/* beach card */}
                      {/* show beach notes with button links*/}
                      <div className="column is-multiline notes-section">
                        <div className="column notes-section">
                          <div className="card notes-section">
                            <div className="card-content is-vcentered has-text-centered">
                              <p className="title">Beach Notes</p>
                              <p className="title">{beach.notes}</p>
                              <div className="title is-centered">
                                {/* add later  <h2><i className="title fas fa-thumbs-up"></i><i className="title fas fa-thumbs-down"></i></h2>*/}
                              </div>
                            </div>

                            {/* card footer */}
                            <footer className="card-footer">
                              <p className="card-footer-item"></p>
                              <button value={beach.id} onClick={this.deleteBeach}>delete beach</button>
                              {/* edit newBeach_notes */}
                              <details>
                                <summary>edit notes</summary>
                                <div className="card">
                                  <div className="card-content">
                                    <form id={beach.id} onSubmit={this.updateBeach}>
                                    <textarea onKeyUp={this.changeUpdateBeachNotes} defaultValue={beach.notes}></textarea><br/>
                                    <input type="submit" value="Update Beach Notes!" />
                                    </form>
                                  </div>
                                </div>
                              </details>
                            </footer>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* beach list container to add more info under CRUD container */}
                    <div className="container">
                      <details>
                        <summary>more information</summary>
                        <div className="card todo-card is-vcentered has-text-centered is-flex-wrap-wrap">
                          <div className="card-header">
                            <div className="card-title">
                              <p> things to do at {beach.name}</p>
                            </div>
                          </div>
                          <div className="card-content is-align-items-center">  {/* flexbox properties not working */}
                            <span className="icon is-flex-direction-row is-justify-content-space-evenly">
                              {recArray.map(recInfo => (
                                <img src={recInfo}/>
                              ))}
                            </span>
                          </div>

                          <footer className="card-footer is-align-content-space-between">
                            {/* hours */}
                            <details>
                              <summary>hours</summary>
                              <div className="card-content">
                              <ul>
                                {hoursArray.map(hoursInfo => (
                                  <li>{hoursInfo}</li>
                                ))}
                              </ul>
                              </div>
                            </details>

                            {/* parking */}
                            <details>
                              <summary>parking</summary>
                                <div className='card-content'>
                                  <ul>
                                    {parkingArray.map(parkingInfo => (
                                      <li>{parkingInfo}</li>
                                    ))}
                                  </ul>
                              </div>
                            </details>

                            {/* tides */}
                            <details>
                              <summary onClick={this.getTides} >tides</summary>
                              <div className="card-content">
                                <h1 className="title has-text-weight-bold">{beach.name}</h1>
                                <p className="subtitle is-italic">Latitiude: {beach.latitude}</p>
                                <p className="subtitle is-italic">Longitude: {beach.longitude}</p>

                                <table border="1">
                                  <thead>
                                    <tr key={beach.id}>
                                      <th>Extreme</th>
                                      <th>Date</th>
                                      <th>Time</th>
                                      <th>Height</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <td> {this.state.high1} </td>
                                      <td> {this.state.highDate1} </td>
                                      <td> {this.state.highTime1} </td>
                                      <td> {this.state.highHeight1} </td>
                                    </tr>
                                    <tr>
                                      <td> {this.state.low1} </td>
                                      <td> {this.state.lowDate1} </td>
                                      <td> {this.state.lowTime1} </td>
                                      <td> {this.state.lowHeight1} </td>
                                    </tr>
                                    <tr>
                                      <td> {this.state.high2} </td>
                                      <td> {this.state.highDate2} </td>
                                      <td> {this.state.highTime2} </td>
                                      <td> {this.state.highHeight2} </td>
                                    </tr>
                                    <tr>
                                      <td> {this.state.low2} </td>
                                      <td> {this.state.lowDate2} </td>
                                      <td> {this.state.lowTime2} </td>
                                      <td> {this.state.lowHeight2} </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>Not suitable for navigation purposes</p>
                              </div>
                            </details>
                          </footer>
                        </div>
                      </details>
                    </div>
                </li>
              })
            }
          </ul>
      </div>
    </div>

      {/* page footer */}
      <footer className="footer">
        <div className="content has-text-centered">
            <p><strong> catZwebZ 2020

            <a href="h#"><i className="fab fa-facebook-square fa-3x fa-fw"></i></a>
            <a href="#" target="_top"><i className="fas fa-envelope fa-3x fa-fw" target="_blank"></i></a>
            <a href="#" target="_blank"><i className="fab fa-instagram-square fa-3x fa-fw"></i></a>
            <a href="#" target="_blank"><i className="fab fa-twitter-square fa-3x fa-fw"></i></a>

            </strong></p>
            <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>
        </div>
      </footer>
    </div>
  </div>
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)

    // console.log(this.state.beachParking);
    // console.log(this.state.beaches);
    // console.log(parkingArray);

    //
    // changeUpdateBeachName = (event) => {
    //   this.setState({
    //     updateBeach_name:event.target.value
    //     })
    //   }
    // changeUpdateBeachPhoto = (event) => {
    //   this.setState({
    //     updateBeach_photo:event.target.value
    //   })
    // }
    // // changeUpdateBeachPhoto_Credit = (event) => {
    //   this.setState({
    //     updateBeach_photo_credit:event.target.value
    //   })
    // }
    // changeUpdateBeachAccess = (event) => {
    //   this.setState({
    //     updateBeach_access:event.target.value
    //   });
    // }
    // changeUpdateBeachParking = (event) => {
    //   this.setState({
    //     updateBeach_parking:event.target.value
    //   });
    // }
    // changeUpdateBeachHours = (event) => {
    //   this.setState({
    //     updateBeach_hours:event.target.value
    //   });
    // }
    // changeUpdateBeachAvail_Rec = (event) => {
    //   this.setState({
    //     updateBeach_avail_rec:event.target.value
    //   });
    // }
    // changeUpdateBeachNotes = (event) => {
    //   this.setState({
    //     updateBeach_notes:event.target.value
    //   });
    // }
    // changeUpdateBeachLatitude = (event) => {
    //   this.setState({
    //     updateBeach_latitude:event.target.value
    //   });
    // }
    // changeUpdateBeachLongitude = (event) => {
    //   this.setState({
    //     updateBeach_longitude:event.target.value
    //   });
    // }

    // <input onKeyUp={this.changeUpdateBeachName} type='text'  placeholder='name' /><br/>
    // <input onKeyUp={this.changeUpdateBeachPhoto} type='text' placeholder='photo' /><br/>
    // <input onKeyUp={this.changeUpdateBeachPhoto_Credit} type='text' placeholder='photo credit' /><br/>
    // <input onKeyUp={this.changeUpdateBeachAccess} type='text' placeholder='access' /><br/>
    // <input onKeyUp={this.changeUpdateBeachParking} type='text' placeholder='parking' /><br/>
    // <input onKeyUp={this.changeUpdateBeachHours} type='text' placeholder='hours' /><br/>
    // <input onKeyUp={this.changeUpdateBeachAvail_Rec} type='text' placeholder='available recreation' /><br/>
    // <input onKeyUp={this.changeUpdateBeachLatitude} type='number' step="0.001" placeholder='latitude' /><br/>
    // <input onKeyUp={this.changeUpdateBeachLongitude} type='number' step="0.001"  placeholder='longitude' /><br/>
