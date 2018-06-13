// // import io from 'socket.io-client';
// // const socket = io('http://localhost:3000');
//
//
const WebSocket = require('isomorphic-ws')
export const ws = new WebSocket('ws://localhost:3000/', {
  origin: 'http://localhost:3000/graphql'
});
