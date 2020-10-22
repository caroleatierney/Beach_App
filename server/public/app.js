call App extends React.Component {
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


// Render!!!!
