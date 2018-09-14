import React, { Component } from 'react';
import './song.css';
import { Line } from 'react-chartjs-2';

function getData() {
  return {
    labels: [0, 1, 2, 3, 4, 5],
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
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(246,136,136,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [
          Math.random() * 65,
          Math.random() * 59,
          Math.random() * 80,
          Math.random() * 81,
          Math.random() * 56,
          Math.random() * 55
        ]
      }
    ]
  };
}

class Song extends Component {
  render() {
    let songClass = this.props.selected ? 'song selected' : 'song';
    return (
      <div className={songClass}>
        <p className="song-name">{this.props.song}</p>
        <p className="song-start">0:00</p>
        <p className="song-end">4:00</p>
        <Line
          data={getData()}
          height={50}
          options={{
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
