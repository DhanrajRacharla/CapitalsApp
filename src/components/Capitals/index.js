const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

import {Component} from 'react'
import './index.css'


// done by me

/*class Capitals extends Component {
  state = {
    countryAndCapitalsList: countryAndCapitalsList,
    initialCapitalDisplayText: countryAndCapitalsList[0].capitalDisplayText,
    initialCountry: countryAndCapitalsList[0].country,
  }

  selectingOption = event => {
    const {countryAndCapitalsList} = this.state

    const updateCountry = countryAndCapitalsList.map(eachItem => {
      if (eachItem.capitalDisplayText === event.target.value) {
        this.setState({
          initialCountry: eachItem.country,
          initialCapitalDisplayText: eachItem.capitalDisplayText,
        })
      }
    })
  }

  render() {
    const {countryAndCapitalsList, initialCapitalDisplayText, initialCountry} =
      this.state

    const settingOption = option => {
      return <option>{option}</option>
    }

    return (
      <div className="blue-container">
        <div className="white-card">
          <h1> Countries and Capitals</h1>
          <div>
            <select
              onChange={this.selectingOption}
              value={initialCapitalDisplayText}
            >
              {countryAndCapitalsList.map(eachItem =>
                settingOption(eachItem.capitalDisplayText),
              )}
            </select>
            <span>Is capital of which country</span>
            <h2>{initialCountry}</h2>
          </div>
        </div>
      </div>
    )
  }
}*/

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }


  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }


  getCountry = () => {
    const {activeCapitalId} = this.state


    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )


    return activeCountryAndCapital.country
  }


  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)


    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
