var playlist = {'bon jovi': 'living on a prayer'};
function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, name){
  return delete playlist.name;
}