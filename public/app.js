//***********************************************
//*************** front end ********************
//***********************************************
//********* sends the request back end  *********
//***********************************************
class App extends React.Component {
  state = {
    beaches:[]
  }

  componentDidMount = () => {
    axios.get('/beaches').then(
      (response) => {
        this.setState({
          beaches:response.data
        })
      }
    )
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
        })
      }
    )
  }

  changeUpdateBeachName = (event) => {
    this.setState(
      {
        updateBeach_name:event.target.value
      }
    )
  }
  changeUpdateBeachPhoto = (event) => {
    this.setState(
      {
        updateBeach_photo:event.target.value
      }
    )
  }
  changeUpdateBeachPhoto_Credit = (event) => {
    this.setState(
      {
        updateBeach_photo_credit:event.target.value
      }
    )
  }
  changeUpdateBeachAccess = (event) => {
    this.setState(
      {
        updateBeach_access:event.target.value
      }
    )
  }
  changeUpdateBeachParking = (event) => {
    this.setState(
      {
        updateBeach_parking:event.target.value
      }
    )
  }
  changeUpdateBeachHours = (event) => {
    this.setState(
      {
        updateBeach_hours:event.target.value
      }
    )
  }
  changeUpdateBeachAvail_Rec = (event) => {
    this.setState(
      {
        updateBeach_avail_rec:event.target.value
      }
    )
  }
  changeUpdateBeachNotes = (event) => {
    this.setState(
      {
        updateBeach_notes:event.target.value
      }
    )
  }

  render = () => {
    return <div>
      <div className="container">

        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
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
              <h2>Below is your Beach bucket list - Please update your vote!</h2>
              <h2><i className="title fas fa-thumbs-up"></i><i className="title fas fa-thumbs-down"></i></h2>
            </div>
          </div>
        </section>

        {/* create beach */}
        <h2>Create Beach</h2>
        <form onSubmit={this.createBeach}>
          <input onKeyUp={this.changeNewBeachName} type='text' placeholder='name' /><br/>
          <input onKeyUp={this.changeNewBeachPhoto} type='text' placeholder='photo' /><br/>
          <input onKeyUp={this.changeNewBeachPhoto_Credit} type='text' placeholder='photo credit' /><br/>
          <input onKeyUp={this.changeNewBeachAccess} type='text' placeholder='access' /><br/>
          <input onKeyUp={this.changeNewBeachParking} type='text' placeholder='parking' /><br/>
          <input onKeyUp={this.changeNewBeachHours} type='text' placeholder='hours' /><br/>
          <input onKeyUp={this.changeNewBeachAvail_Rec} type='text' placeholder='available recreation' /><br/>
          <input onKeyUp={this.changeNewBeachNotes} type='text' placeholder='notes' /><br/>
          <input type="submit" value="Create new discovered private Beach!" />
        </form>

        {/* beach list */}
        <div className="container">
          <h2> List of Marshfield Beaches </h2>
            <ul>
              {
                this.state.beaches.map((beach, index) => {
                  return <li key={index}>
                    <div className="columns">

                      {/* beach photo} */}
                      <div className="column">
                        <img src={beach.photo}/>
                        <h3>photo credit: {beach.photo_credit}</h3>
                      </div>

                      {/* beach card */}
                      {/* show beach notes with button links*/}
                      <div className="column is-multiline">
                        <div className="column">
                          <div className="card">
                            <div className="card-content is-vcentered has-text-centered">
                              <p className="title">Beach Notes</p>
                              <p className="title">{beach.notes}</p>
                            </div>

                            {/* card footer */}
                            <footer className="card-footer">
                              <p className="card-footer-item">
                                <button value={beach.id} onClick={this.deleteBeach}>delete beach</button>
                                <button value={beach.id} >update notes</button>
                                <button value={beach.id} >more information</button>
                              </p>
                            </footer>
                          </div>
                        </div>
                      </div>

                    </div>
                  </li>
                })
              }
            </ul>
        </div>

      {/* page footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong> catZwebZ 2020 </strong>
          </p>
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

// save these in variables and update
// <input onKeyUp={this.changeUpdateBeachName} type='text'  default='name' /><br/>
// <input onKeyUp={this.changeUpdateBeachPhoto} type='text' placeholder='photo' /><br/>
// <input onKeyUp={this.changeUpdateBeachPhoto_Credit} type='text' placeholder='photo credit' /><br/>
// <input onKeyUp={this.changeUpdateBeachAccess} type='text' placeholder='access' /><br/>
// <input onKeyUp={this.changeUpdateBeachParking} type='text' placeholder='parking' /><br/>
// <input onKeyUp={this.changeUpdateBeachHours} type='text' placeholder='hours' /><br/>
// <input onKeyUp={this.changeUpdateBeachAvail_Rec} type='text' placeholder='available recreation' /><br/>



// <div className="column is-multiline">
  // <h1>{beach.name}</h1>
  // <h2>{beach.access}</h2>
  // <h2>{beach.parking}</h2>
  // <h2>{beach.hours}</h2>
  // <h2>{beach.avail_rec}</h2>
  // <h2>{beach.notes}</h2>
  // <button value={beach.id} onClick={this.deleteBeach}>DELETE BEACH</button>
// </div>



// <div className="column">
  // <div className="card">
    // <div className="card-content">
      // <form id={beach.id} onSubmit={this.updateBeach}>
        // <input onKeyUp={this.changeUpdateBeachNotes} type='text' placeholder='notes' /><br/>
        // <input type="submit" value="Update Beach Notes!" />
      // </form>
    // </div>
  // </div>
