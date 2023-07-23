import React, {useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch }) => {

    const [searchvalue, setSearchValue] = useState('');

    const handleChange = (e) =>{
        const query = e.target.value;
        setSearchValue(query);
    }

    useEffect(()=>{
        const debounce = setTimeout(() => {
            onSearch(searchvalue);
        }, 1000);
        return () =>{
            clearTimeout(debounce);
        }
    },[searchvalue, onSearch])

    return (
        <div>
            <Container>
                <Form className="searchbox">
                    <Form.Control
                        placeholder="Looking for Something different?"
                        className="inputBox"
                        value={searchvalue}
                        onChange={handleChange}
                    />
                    <FontAwesomeIcon icon={faSearch} className="searchBtn btn searchbtn" />
                </Form>
            </Container>
        </div>
    );
};

export default Search;
