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

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://i.imgur.com/kWKYRa8.jpg"/>
            </a>
          </div>
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
                    <strong>log in</strong>
                  </a>
                  <a className= "button is-primary">
                    <strong>get started</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero is-success">
          <div className="container">
            <h1 className="title">Welcome Marshfield Beachgoers!</h1>
            <h2>Below is your Beach bucket list - Please update your vote!</h2>
            <h2><i className="title fas fa-thumbs-up"></i><i className="title fas fa-thumbs-down"></i></h2>
          </div>
        </section>

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

        <h2> List of Marshfield Beaches </h2>
        <ul>
          {
            this.state.beaches.map((beach, index) => {
              return <li key={index}>

                {beach.name}: {beach.photo}: {beach.photo_credit}: {beach.access}: {beach.parking}: {beach.hours}: {beach.avail_rec}: {beach.notes}

                <button value={beach.id} onClick={this.deleteBeach}>DELETE BEACH</button>

                <form id={beach.id} onSubmit={this.updateBeach}>
                  <input onKeyUp={this.changeUpdateBeachName} type='text' placeholder='name' /><br/>
                  <input onKeyUp={this.changeUpdateBeachPhoto} type='text' placeholder='photo' /><br/>
                  <input onKeyUp={this.changeUpdateBeachPhoto_Credit} type='text' placeholder='photo credit' /><br/>
                  <input onKeyUp={this.changeUpdateBeachAccess} type='text' placeholder='access' /><br/>
                  <input onKeyUp={this.changeUpdateBeachParking} type='text' placeholder='parking' /><br/>
                  <input onKeyUp={this.changeUpdateBeachHours} type='text' placeholder='hours' /><br/>
                  <input onKeyUp={this.changeUpdateBeachAvail_Rec} type='text' placeholder='available recreation' /><br/>
                  <input onKeyUp={this.changeUpdateBeachNotes} type='text' placeholder='notes' /><br/>
                  <input type="submit" value="Update Beach Notes!" />
                </form>
              </li>
            }
          )
        }
      </ul>

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
