import { SpotifyApiContext } from 'react-spotify-api';
import { Track } from 'react-spotify-api'
import App from './App';
import axios from 'axios';

const spotifyInfo = {
    spotifyToken: "4d98e3698e644c8e9ad6e17591d85a24"

}

export default spotifyInfo;

<SpotifyApiAxiosContext.Provider value={axios}>
    <SpotifyApiContext.Provider value={spotifyToken}>
        <App />
    </SpotifyApiContext.Provider>
</SpotifyApiAxiosContext.Provider>,

    <Track id={["4kmBkq3ONzENSIRv2ah8Gh", "58LDBCFIHWmFnRGJQPTXvb"]}>
        {(tracks, loading, error) => (
            tracks ? (
                tracks.map(track => (
                    <h1 key={track.id}>{track.name}</h1>
                ))
            ) : null
        )}
    </Track>