package Asteroids;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.util.HashMap;

public class SoundManager {

    private static HashMap<String, MediaPlayer> preloadedMedia = new HashMap<>();

    public static void preloadMedia(String fileName) {
        if (!preloadedMedia.containsKey(fileName)) {
            try {
                String fullPath = Constant.BASE_URL + fileName;
                File file = new File(fullPath);
                Media media = new Media(file.toURI().toString());
                MediaPlayer mediaPlayer = new MediaPlayer(media);
                preloadedMedia.put(fileName, mediaPlayer);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public static void playSound(String fileName) {
        MediaPlayer mediaPlayer = preloadedMedia.get(fileName);
        if (mediaPlayer != null) {
        	mediaPlayer.stop();
            mediaPlayer.setVolume(Constant.SOUND_VOLUME);
            mediaPlayer.play();
        }
    }
}
