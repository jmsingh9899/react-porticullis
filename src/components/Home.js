import React from "react";
import Jms from './Jms';
import Nav from './Nav';
import About from './About';
import Project from './Project';
import { useState } from 'react';

function Home() {
    const [page, setPage] = useState('jms')
    if (page === 'jms') {
        return (
            <>
                <Nav setPage={setPage} page={page} />
                <Jms />
            </>
        )
    } else if (page === 'about') {
        return (
            <>
                <Nav setPage={setPage} page={page} />
                <About />
            </>
        )
    }else if (page === 'project'){
        return (
            <>
                <Nav setPage={setPage} page={page} />
                <Project />
            </>
        )
    }
    return ''
};

export default Home