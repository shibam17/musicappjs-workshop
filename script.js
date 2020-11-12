window.onload = () => {
    const song_img_el = document.querySelector('#song-image');
    const song_title_el = document.querySelector('#song-title');
    const song_artist_el = document.querySelector('#song-artist');
    
    const play_btn = document.querySelector('#play-btn');
    const play_btn_icon = document.querySelector('#play-btn .play-icon');
    const prev_btn = document.querySelector('#prev-btn');
    const next_btn = document.querySelector('#next-btn');

    const audio_player = document.querySelector('#music-player');

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title: 'Wavin Flags',
            artist: "K'naan",
            song_path: 'music/Music-1.mpeg',
            img_path: 'images/image-1.jpeg'
        },
        {
            title: 'Phineas and Ferb ',
            artist: "Bowling for Soup",
            song_path: 'music/Music-2.mpeg',
            img_path: 'images/image-2.jpeg'
        },
        {
            title: 'Waka Waka',
            artist: "Shakira",
            song_path: 'music/Music-3.mpeg',
            img_path: 'images/image-3.jpeg'
        },
        {
            title: ' Steven universe, the crystal gem',
            artist: "Zach Callison , Deedee Magno Hall, Estelle",
            song_path: 'music/Music-4.mpeg',
            img_path: 'images/image-4.jpeg'
        },

    ];

    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer () {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }
    
    function TogglePlaySong () {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play')
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play')
            play_btn_icon.classList.remove('fa-pause');
        }
    }
    
    function ChangeSong (next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if (current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index+1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.img_path + "');";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;
        audio_player.src = song.song_path;
    }
}