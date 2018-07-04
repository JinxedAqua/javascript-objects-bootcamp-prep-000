var playlist = {'bon jovi': 'living on a prayer'};
function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  if(delete playlist.artistName){
      return playlist;
  }else{
    console.log(playlist);
  };

}