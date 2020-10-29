var rec=''
var recArray=[]

var hours=''
var hoursArray=[]

var parking=''
var parkingArray=[]

var high1 = ''
var highTime1 = ''
var highHeight1 = ''

var low1 = ''
var lowTime1 = ''
var lowHeight1 = ''

var high2 = ''
var highTime2 = ''
var lowHeight2 = ''

var low2 = ''
var lowTime2 = ''
var lowHeight2 = ''

//***********************************************
//*************** front end *********************
//***********************************************
//********* sends the request back end  *********
//***********************************************
class App extends React.Component {
  state = {
    beaches:[],
  }

  componentDidMount = () => {
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
      console.log(data);
      // console.log(data.extremes);
      // console.log(data.extremes[0].datetime);

      this.setState(
        {
        high1:data.extremes[0].state,
        low1:data.extremes[1].state,
        high2:data.extremes[2].state,
        low2:data.extremes[3].state,

        highTime1:data.extremes[0].datetime,
        lowTime1:data.extremes[1].datetime,
        highTime2:data.extremes[2].datetime,
        lowTime2:data.extremes[3].datetime,

        highHeight1:data.extremes[0].datetime,
        lowHeight1:data.extremes[1].datetime,
        highHeight2:data.extremes[2].datetime,
        lowHeight2:data.extremes[3].datetime,
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
        name:this.state.updateBeach_name,
        photo:this.state.updateBeach_photo,
        photo_credit:this.state.updateBeach_photo_credit,
        access:this.state.updateBeach_access,
        parking:this.state.updateBeach_parking,
        hours:this.state.updateBeach_hours,
        avail_rec:this.state.updateBeach_avail_rec,
        notes:this.state.updateBeach_notes,
        latitude:this.state.updateBeach_latitude,
        longitude:this.state.updateBeach_longitude,
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

  changeUpdateBeachName = (event) => {
    this.setState({
      updateBeach_name:event.target.value
      })
    }
  changeUpdateBeachPhoto = (event) => {
    this.setState({
      updateBeach_photo:event.target.value
    })
  }
  changeUpdateBeachPhoto_Credit = (event) => {
    this.setState({
      updateBeach_photo_credit:event.target.value
    })
  }
  changeUpdateBeachAccess = (event) => {
    this.setState({
      updateBeach_access:event.target.value
    });
  }
  changeUpdateBeachParking = (event) => {
    this.setState({
      updateBeach_parking:event.target.value
    });
  }
  changeUpdateBeachHours = (event) => {
    this.setState({
      updateBeach_hours:event.target.value
    });
  }
  changeUpdateBeachAvail_Rec = (event) => {
    this.setState({
      updateBeach_avail_rec:event.target.value
    });
  }
  changeUpdateBeachNotes = (event) => {
    this.setState({
      updateBeach_notes:event.target.value
    });
  }
  changeUpdateBeachLatitude = (event) => {
    this.setState({
      updateBeach_latitude:event.target.value
    });
  }
  changeUpdateBeachLongitude = (event) => {
    this.setState({
      updateBeach_longitude:event.target.value
    });
  }

  render = () => {
    return <div>
      <div className="container">

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://i.imgur.com/kWKYRa8.jpg"/>
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
              <h2>Below is your Beach Bucket list - Please update your vote!</h2>

              {/* create beach */}
              <details>
                <summary><button>create beach</button></summary>
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
                        <input type="submit" value="Create new discovered private Beach!" />
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
                  var save_name=beach.name
                  var save_beach_photo=beach.photo
                  var save_beach_photo_credit=beach.photo_credit
                  var save_access=beach.access
                  var save_parking=beach.parking
                  var save_hours=beach.hours
                  var save_avail_rec=beach.avail_rec
                  var save_latitude=beach.latitude
                  var save_longitude=beach.longitude

                  this.state.lat=beach.latitude
                  this.state.long=beach.longitude

                  {/* turn parking, todo, hour and photos into an array */}
                  parking = beach.parking
                  parkingArray=parking.split(",")
                  hours = beach.hours
                  hoursArray=hours.split(",")
                  rec = beach.avail_rec
                  recArray=rec.split(",")

                  console.log(recArray[0])

                  return <li key={index}>
                    <div className="columns">

                      {/* beach photo} */}
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
                                <h2><i className="title fas fa-thumbs-up"></i><i className="title fas fa-thumbs-down"></i></h2>
                              </div>
                            </div>

                            {/* card footer */}
                            <footer className="card-footer">
                              <p className="card-footer-item"></p>
                              <button value={beach.id} onClick={this.deleteBeach}>delete beach</button>
                              {/* edit newBeach_notes */}
                              <details>
                                <summary><button value={beach.id} >edit notes</button></summary>
                                <div className="card">
                                  <div className="card-content">
                                    <form id={beach.id} onSubmit={this.updateBeach}>
                                    <input onKeyUp={this.changeUpdateBeachName} type='text'  placeholder='name' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachPhoto} type='text' placeholder='photo' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachPhoto_Credit} type='text' placeholder='photo credit' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachAccess} type='text' placeholder='access' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachParking} type='text' placeholder='parking' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachHours} type='text' placeholder='hours' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachAvail_Rec} type='text' placeholder='available recreation' /><br/>
                                    <textarea onKeyUp={this.changeUpdateBeachNotes} defaultValue={beach.notes}></textarea><br/>
                                    <input onKeyUp={this.changeUpdateBeachLatitude} type='number' step="0.001" placeholder='latitude' /><br/>
                                    <input onKeyUp={this.changeUpdateBeachLongitude} type='number' step="0.001"  placeholder='longitude' /><br/>
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
                        <summary><button value={beach.id}>more information</button></summary>
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
                              <summary><button value={beach.id} onClick={this.getHours}>hours</button></summary>
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
                              <summary><button value={beach.id} >parking</button></summary>
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
                            <summary><button value={beach.id} onClick={this.getTides} >tides</button></summary>
                              <div className="card-content">
                                <p> latitiude: {beach.latitude}</p>
                                <p> longitude: {beach.longitude}</p>
                                <p> {this.state.high1} {this.state.highTime1} {this.state.highHeight1} </p>
                                <p> {this.state.low1} {this.state.lowTime1} {this.state.lowHeight1} </p>
                                <p> {this.state.high2} {this.state.highTime2}{this.state.highHeight2}  </p>
                                <p> {this.state.low2} {this.state.lowTime2} {this.state.highHeight2} </p>
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


// name:save_name,
// photo:save_beach_photo,
// photo_credit:save_beach_photo_credit,
// access:save_access,
// parking:save_parking,
// hours:save_hours,
// avail_rec:save_avail_rec,
// notes:this.state.updateBeach_notes,


    // console.log(this.state.beachParking);
    // console.log(this.state.beaches);
    // console.log(parkingArray);


    // <span className="icon is-flex-direction-row is-justify-content-space-evenly">
      // <img src="https://i.imgur.com/FAOW8rW.png"/>
      // <img src="https://i.imgur.com/boTxmLr.png"/>
      // <img src="https://i.imgur.com/EJwnOgi.png"/>
      // <img src="https://i.imgur.com/Sovm9sB.png"/>
      // <img src="https://i.imgur.com/gSIFxt4.png"/>
      // <img src="https://i.imgur.com/huyrFri.png"/>
      // <img src="https://i.imgur.com/bPvVrcT.png"/>
      // <img src="https://i.imgur.com/JlPzFny.png"/>
      // <img src="https://i.imgur.com/MA74rCS.png"/>
    // </span>
