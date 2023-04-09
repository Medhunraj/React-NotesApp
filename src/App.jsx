import React from 'react'
import Header from './Header';
import Footer from './footer';
import Note from './Note';

function App(){
    return <div className='AppDiv'>
        <Header />
        <Note />
        <Footer />
    </div>
}

export default App;