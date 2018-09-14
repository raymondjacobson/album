import React, { Component } from 'react';
import './song.css';
import { Line } from 'react-chartjs-2';
import ReactAudioPlayer from 'react-audio-player';
import Store from '../store';
import { updateCursor } from '../store/actions';

function getData(durationSeconds) {
  const labels = [...Array(durationSeconds).keys()];
  // const data = Array.from({length: durationSeconds},
  //   () => Math.floor(Math.random() * 40));
  const data = Array.from({ length: durationSeconds }, () => 0);
  return {
    labels: labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(246,136,136,0.1)',
        borderColor: 'rgba(246,136,136,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderWidth: 1.5,
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'rgba(246,136,136,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 0,
        data: data
      }
    ]
  };
}

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: '0:00',
      duration: null,
      data: getData(0)
    };
    // TODO: rm.
    // this.dataTest = this.dataTest.bind(this);
  }
  _audioTag = null;
  _chartRef = null;
  // Testing otherl listeners works.
  _counter = 0;

  secondsToMinutes(time) {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.play();
    } else {
      this.pause();
    }
  }

  componentDidMount() {
    this.updateCharts = setInterval(() => {
      this.updateState();
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.updateCharts);
  }

  play() {
    this._audioTag.audioEl.play();
  }
  pause() {
    this._audioTag.audioEl.pause();
  }

  onEnded() {
    this.props.songEndedCallback();
  }

  dataTest(i) {
    Store.dispatch(
      updateCursor(this.props.albumIndex, this.props.songIndex, i, 50)
    );
    setTimeout(() => {
      Store.dispatch(
        updateCursor(this.props.albumIndex, this.props.songIndex, i, -50)
      );
    }, 1000);
  }

  onLoadedMetadata() {
    const durationSeconds = this._audioTag.audioEl.duration;
    const duration = this.secondsToMinutes(this._audioTag.audioEl.duration);
    this.setState({
      duration: duration,
      data: getData(Math.floor(durationSeconds))
    });

    // TODO: rm. TESTING THAT MULTIPLE LISTENERS DOES WORK.
    this._counter1 = Math.floor(Math.random() * durationSeconds);
    this._counter2 = Math.floor(Math.random() * durationSeconds);
    this._counter3 = Math.floor(Math.random() * durationSeconds);
    this.interval = setInterval(() => {
      this._counter1++;
      this._counter2++;
      this._counter3++;
      this.dataTest(this._counter1);
      this.dataTest(this._counter2);
      this.dataTest(this._counter3);
    }, 1000);
  }

  updateState() {
    const albums = Store.getState().albums;
    const positionsFromStore =
      albums[this.props.albumIndex].songs[this.props.songIndex].positions;

    const datasetsCopy = this.state.data.datasets.slice(0);
    const dataCopy = datasetsCopy[0].data.slice(0);

    Object.entries(positionsFromStore).forEach(([index, weight]) => {
      dataCopy[index] = weight;
    });
    datasetsCopy[0].data = dataCopy;

    this.setState({
      data: Object.assign({}, this.state.data, {
        datasets: datasetsCopy
      })
    });
  }

  onListen() {
    const currentTime = this._audioTag.audioEl.currentTime;
    const currentPosition = Math.floor(currentTime);

    Store.dispatch(
      updateCursor(
        this.props.albumIndex,
        this.props.songIndex,
        currentPosition,
        100
      )
    );

    setTimeout(
      function() {
        Store.dispatch(
          updateCursor(
            this.props.albumIndex,
            this.props.songIndex,
            currentPosition,
            -100
          )
        );
      }.bind(this),
      1000
    );

    this.setState({
      currentTime: this.secondsToMinutes(currentTime)
    });

    // this.upda/teState();
  }

  render() {
    let songClass = this.props.selected ? 'song selected' : 'song';
    return (
      <div className={songClass}>
        <ReactAudioPlayer
          src={this.props.songLocation}
          onListen={() => this.onListen()}
          listenInterval={500}
          onEnded={() => this.onEnded()}
          onLoadedMetadata={() => this.onLoadedMetadata()}
          controls
          ref={element => {
            this._audioTag = element;
          }}
        />
        <p className="song-name" onClick={() => this.play()}>
          {this.props.song}
        </p>
        <p className="song-start">{this.state.currentTime}</p>
        <p className="song-end">{this.state.duration}</p>
        <Line
          ref={element => {
            this._chartRef = element;
          }}
          data={this.state.data}
          height={50}
          options={{
            // animation: {
            //   duration: 100, // general animation time
            // },
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  display: false,
                  ticks: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  display: false,
                  ticks: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Song;
