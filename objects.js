var playlist = new Object({keys:"0"});
function updatePlaylist (playlist,artistName,songTitle){
  return Object.assign( {}, { [artistName]:songTitle})
}
  