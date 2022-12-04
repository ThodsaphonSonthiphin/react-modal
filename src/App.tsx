import React, {useState} from 'react';
import logo from './logo.svg';

import {Modal} from "./Modal";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main>
            <button className={"primaryBtn"} onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </main>
    );
}

export default App;
