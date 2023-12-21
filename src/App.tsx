import React from 'react';
import {LanguageContext} from "./context";
import LandingPage from "./app/components/landingPage/LandingPage";
import Footer from "./app/components/Footer"
function App() {
  return (
    <div className="App">
        <LanguageContext.Provider value={getUserLanguage()}>
            <LandingPage/>
            <Footer/>
        </LanguageContext.Provider>
    </div>
  );
}
function getUserLanguage() {
    var language = window.navigator.language
    console.log(language)
    return language
}
export default App;
