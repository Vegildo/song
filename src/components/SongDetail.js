import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ musica }) => {
    if (!musica) {
        return (
            <div>
                <h1><strong>SELECIONE UMA MÚSICA</strong></h1>
            </div>
        );
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {musica.title}
                <br />
                Duration : {musica.duration}
            </p>            
        </div>
    );
};

const mapStateToProps = state => {
    return { musica: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);