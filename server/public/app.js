class App extends React.Component {
  state = {
    beaches:[];
  }

  component DidMount = () => {
    console.log('test');
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
        name.this.state.newBeach_name,
        photo.this.state.newBeach_photo,
        photo_credit.this.state.newBeach_photo_credit,
        access.this.state.newBeach_access,
        parking.this.state.newBeach_parking,
        hours.this.state.newBeach_hours,
        avail_rec.this.state.newBeach_avail_rec,
        notes.this.state.newBeach_notes,
      }
    ).then(response) => {
      this.setState({
        beaches:response.data
      })
    }
  }

  changeNewBeachName = (event) => {
    this.setState({
      newBeachName:event.target.value
    });
  }

  changeNewBeachPhoto = (event) => {
    this.setState({
      newBeachPhoto:event.target.value
    });
  }

  changeNewBeachPhoto_Credit = (event) => {
    this.setState({
      newBeachPhoto_Credit:event.target.value
    });
  }

  changeNewBeachAccess = (event) => {
    this.setState({
      newBeachAccess:event.target.value
    });
  }

  changeNewBeachParking = (event) => {
    this.setState({
      newBeachParking:event.target.value
    });
  }

  changeNewBeachHours = (event) => {
    this.setState({
      newBeachHours:event.target.value
    });
  }

  changeNewBeachAvail_Rec = (event) => {
    this.setState({
      newBeachAvail_Rec:event.target.value
    });
  }

  changeNewBeachNotes = (event) => {
    this.setState({
      newBeachNotes:event.target.value
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
      '/people/' + id,
      {
        name.this.state.updateBeach_name,
        photo.this.state.updateBeach_photo,
        photo_credit.this.state.updateBeach_photo_credit,
        access.this.state.updateBeach_access,
        parking.this.state.updateBeach_parking,
        hours.this.state.updateBeach_hours,
        avail_rec.this.state.updateBeach_avail_rec,
        notes.this.state.updateBeach_notes,
      }
      ).then(
        (reponse) => {
          beaches:response.data,
          name:'',
          photo:'',
          photo_credit',
          access'',
          parking'',
          hours'',
          avail_rec'',
          notes'',
        })
      }
    )
  }

  changeUpdateBeachName = (event) => {
    this.setState(
      {
        udpateBeachName:event.target.value
      }
    )
  }
  changeUpdateBeachPhoto = (event) => {
    this.setState(
      {
        udpateBeachPhoto:event.target.value
      }
    )
  }
  changeUpdateBeachPhoto_Credit = (event) => {
    this.setState(
      {
        udpateBeachPhoto_Credit:event.target.value
      }
    )
  }
  changeUpdateBeachAccess = (event) => {
    this.setState(
      {
        udpateBeachAccess:event.target.value
      }
    )
  }
  changeUpdateBeachParking = (event) => {
    this.setState(
      {
        udpateBeachParking:event.target.value
      }
    )
  }
  changeUpdateBeachHours = (event) => {
    this.setState(
      {
        udpateBeachHours:event.target.value
      }
    )
  }
  changeUpdateBeachAvail_Rec = (event) => {
    this.setState(
      {
        udpateBeachAvail_Rec:event.target.value
      }
    )
  }
  changeUpdateBeachNotes = (event) => {
    this.setState(
      {
        udpateBeachNotes:event.target.value
      }
    )
  }

  render = () => {
    return <div>
      <h2>Create Beach</h2>
      <form onSubmit={this.createBeach}>
        <inputOnKeyUp={this.changeNewBeachName} type='text' placeholder='name' /<br/>
        <inputOnKeyUp={this.changeNewBeachPhoto} type='text' placeholder='photo' /<br/>
        <inputOnKeyUp={this.changeNewBeachPhoto_Credit} type='text' placeholder='photo credit' /<br/>
        <inputOnKeyUp={this.changeNewBeachPhoto_Access} type='text' placeholder='access' /<br/>
        <inputOnKeyUp={this.changeNewBeachParking} type='text' placeholder='parking' /<br/>
        <inputOnKeyUp={this.changeNewBeachHours} type='text' placeholder='hours' /<br/>
        <inputOnKeyUp={this.changeNewBeachAvail_Rec} type='text' placeholder='available recreation' /<br/>
        <inputOnKeyUp={this.changeNewBeachNotes} type='text' placeholder='notes' /<br/>
      </form>
      <h2> List of Marshfield Beaches </h2>
        <ul>
          {
            this.state.beach.map((beach, index) => {
              return <li key={index}>

                {beach.name}: {beach.name}

                <button value={beach.id} onClick={this.deleteBeach}>DELETE BEACH</button>

                <form id={beach.id} onSubmit={this.updateBeach}>
                  <inputOnKeyUp={this.changeUpdateBeachName} type='text' placeholder='name' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachPhoto} type='text' placeholder='photo' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachPhoto_Credit} type='text' placeholder='photo credit' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachPhoto_Access} type='text' placeholder='access' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachParking} type='text' placeholder='parking' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachHours} type='text' placeholder='hours' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachAvail_Rec} type='text' placeholder='available recreation' /<br/>
                  <inputOnKeyUp={this.changeUpdateBeachNotes} type='text' placeholder='notes' /<br/>
                </form>
              </li>
            }
          )
        }
      </ul>
    </div>
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
