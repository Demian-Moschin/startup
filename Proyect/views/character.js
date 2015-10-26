var React = require('react');
var API = require('../API/battle-net.js');
var CharacterComponent = require('../components/character-info.js');


var CharacterView= React.createClass({

    getInitialState: function () {
        return this.getCharacterInfo();
    },

    getCharacterInfo: function () {

    },

    updateCollection: function (data) {
        this.setState({
            characterInfo: data
        });
        console.log(this.state.characterInfo);
    },

    componentDidMount: function () {
       API.getCharacterProfile(this.updateCollection);
    },

    render: function () {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    },

    getListProps: function () {
        return {
            characterInfo: this.state.characterInfo
        }
    },

    renderList: function () {
        return (
            <CharacterComponent {...this.getListProps()} />

        )
    },

    handleSearchInputChange: function () {return false;}

});

module.exports = CharacterView;