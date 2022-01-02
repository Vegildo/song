import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Selecionar
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {        
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);


/*
const Counter = (props) => {
        return (
            <div>
                <button onClick={props.increment} className="increment">Increment</button>
                <button onClick={props.decrement} className="decrement">Decrement</button>
                Current Count: <span>0</span>
            </div>
        );
    };
    
    const mapStateToProps = state => {
        return { count: state.count }
    }
    
    const WrappedCounter = ReactRedux.connect(mapStateToProps, {
        increment,
        decrement
        })(Counter);
*/