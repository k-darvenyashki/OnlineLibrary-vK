import React from 'react';
import { 
    InputGroup, 
    InputGroupText, 
    InputGroupAddon, 
    Input } from 'reactstrap';

class SearchField extends React.Component {
    render = () => 
        <InputGroup>
            <Input 
                value={this.props.searchValue} 
                onChange={this.props.searchValueChanged}
            />
            <InputGroupAddon addonType="append">
                <InputGroupText>Търси</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
}
export default SearchField;