import {useState} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [activeTab, setActiveTab] = useState(
    languageGreetingsList[0].buttonText,
  )
  console.log(activeTab)

  const englishGreeting = () => (
    <>
      <img
        src={languageGreetingsList[0].imageUrl}
        alt={languageGreetingsList[0].imageAltText}
      />
    </>
  )

  const tamilGreeting = () => (
    <>
      <img
        src={languageGreetingsList[1].imageUrl}
        alt={languageGreetingsList[1].imageAltText}
      />
    </>
  )

  const teluguGreeting = () => (
    <>
      <img
        src={languageGreetingsList[2].imageUrl}
        alt={languageGreetingsList[2].imageAltText}
      />
    </>
  )

  // conditional rendering function

  const conditionalRendering = () => {
    switch (activeTab) {
      case languageGreetingsList[0].buttonText:
        return englishGreeting()
      case languageGreetingsList[1].buttonText:
        return tamilGreeting()
      case languageGreetingsList[2].buttonText:
        return teluguGreeting()
      default:
        return null
    }
  }

  // active tab class style
  const actCls = 'active-tab'

  return (
    <>
      <div className="app-page">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachTab => (
            <li key={eachTab.id}>
              <button
                type="button"
                className={activeTab === eachTab.buttonText ? actCls : null}
                onClick={() => setActiveTab(eachTab.buttonText)}
              >
                {eachTab.buttonText}
              </button>
            </li>
          ))}
        </ul>
        {conditionalRendering()}
      </div>
    </>
  )
}

export default App
