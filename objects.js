var playlist = {'bon jovi': 'living on a prayer'};
function updatePlaylist(playlist, artistName, songTitle){
  playlist =  Object.assign({ artistName: songTitle })
  console.log(playlist);
}
function removeFromPlaylist(playlist, name){
  return delete playlist.name;
}