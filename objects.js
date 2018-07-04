var playlist = {'bon jovi': 'living on a prayer'};
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({ artistName: songTitle })
}
function removeFromPlaylist(playlist, name){
  return delete playlist.name;
}